const { Router } = require("express");
const Jewellery = require('../models/jewellery');
const router = Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images'));
    },
    filename: function(req, file, cb) {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg and .png images are allowed!'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get('/', async (req, res) => {
  try {
    const jewellery = await Jewellery.find({});
    res.json({ jewellery }); // ✅ MUST wrap inside an object
  } catch (err) {
    res.status(500).json({ message: 'Error fetching jewellery' });
  }
});



router.get('/:id', async (req, res) => {
  try {
    const jewellery = await Jewellery.findById(req.params.id);
    if (!jewellery) {
      return res.status(404).json({ message: 'Jewellery not found' });
    }
    return res.json(jewellery);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/addjewellery', upload.single('image'), async (req, res) => {
    try {
        const { jewelleryname, description, price, quantity } = req.body;
        console.log("req.body:", req.body);
        console.log("req.file:", req.file); // Debugging line

        if (!req.file) {
            return res.status(400).json({ error: "Please upload an image" });
        }

        const newJewellery = await Jewellery.create({
            jewelleryname,
            description,
            price,
            quantity,
            image: 'images/' + req.file.filename
            // createdBy: req.jewellery_id,
        });
        console.log("New Jewellery:", newJewellery);
        return res.json({ jewellery: newJewellery });
    } catch (error) {
        console.error("Error found", error);
        return res.status(500).json({ error: "Internal error " });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const jewelleryid = req.params.id;
        const deletedjewellery = await Jewellery.findByIdAndDelete(jewelleryid);
        return res.json({ message: "jewellery delete", jewellery: deletedjewellery });
    } catch (error) {
        return res.status(500).json({ error: "failed to delete jewellery" });
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const jewelleryid = req.params.id;
        const { jewelleryname, description, price, quantity } = req.body;

        if (!jewelleryid) {
            return res.status(400).json({ error: "Jewellery ID is required" });
        }

        const updateJewellery = await Jewellery.findByIdAndUpdate(
            jewelleryid,
            { jewelleryname, description, price, quantity },
            { new: true }
        );

        if (!updateJewellery) {
            return res.status(404).json({ error: "Jewellery not found" });
        }

        return res.json({ message: "Jewellery updated", jewellery: updateJewellery });
    } catch (error) {
        console.error("Error updating jewellery:", error);
        return res.status(500).json({ error: "Failed to update jewellery" });
    }
});

module.exports = router;