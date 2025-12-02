const { Router } = require("express");
const AboutSection = require('../models/about')

const router = Router()

router.get("/", async(req,res)=>{
    const about = await AboutSection.find()
    const Json = {about}
    return res.json(Json)
})

router.post("/addabout",async(req,res)=>{
    try{
        const {abouttitle, aboutdescription}=req.body;
        console.log(req.body)
        const newAbout = await AboutSection.create({
            abouttitle,
            aboutdescription
        })
        return res.json({about: newAbout})
    }catch(error){
        console.error("error found",error)
        return res.status(500).json({error:"internal error "})
    }
})

router.put("/update/:id", async (req, res) => {
  try {
    const aboutId = req.params.id;
    const { abouttitle, aboutdescription } = req.body;

    if (!aboutId) {
      return res.status(400).json({ error: "About ID is required" });
    }

    const updatedAbout = await AboutSection.findByIdAndUpdate(
      aboutId,
      { abouttitle, aboutdescription },
      { new: true }
    );

    if (!updatedAbout) {
      return res.status(404).json({ error: "About section not found" });
    }

    return res.json({ message: "About section updated", about: updatedAbout });
  } catch (error) {
    console.error("Error updating About section:", error);
    return res.status(500).json({ error: "Failed to update About section" });
  }
});


module.exports = router