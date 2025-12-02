const { Router } = require("express");
const TitleSection = require('../models/title')

const router = Router()

router.get("/", async (req, res) => {
    const title = await TitleSection.find()
    const Json = {title}
    return res.json(Json)
})

router.post("/addtitle", async (req, res) => {
    try {
        const {websitetitle} = req.body;
        console.log(req.body)
        const newTitle = await TitleSection.create({ websitetitle });
        return res.json({ title: newTitle });
    } catch (error) {
        console.error("error found", error)
        return res.status(500).json({ error: "internal error " })
    }
})

router.put("/update/:id", async (req, res) => {
  try {
    const titleid = req.params.id;
    const { websitetitle, titledescription } = req.body;

    if (!titleid) {
      return res.status(400).json({ error: "title ID is required" });
    }

    const updatetitle = await TitleSection.findByIdAndUpdate(
      titleid,
      { websitetitle, titledescription },
      { new: true }
    );

    if (!updatetitle) {
      return res.status(404).json({ error: "title not found" });
    }

    return res.json({ message: "title section is updated", title: updatetitle });
  } catch (error) {
    console.error("Error updating title section:", error);
    return res.status(500).json({ error: "Failed to update title section" });
  }
});



module.exports = router