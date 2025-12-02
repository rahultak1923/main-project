const { Router } = require("express");
const HeroSection = require("../models/hero");

const router = Router()

router.get("/",async(req,res)=>{
    const hero = await HeroSection.find({})
    const Json = {hero}
    return res.json(Json)
})

router.post('/addhero',async(req,res)=>{
    try{
        const {herotitle,herodescription}=req.body;
        console.log(req.body)
        const newHero = await HeroSection.create({
            herotitle,
            herodescription,
        })
        return res.json({hero: newHero})
    }catch(error){
        console.error("error found",error)
        return res.status(500).json({error:"internal error "})
    }
})

router.put("/update/:id", async(req,res)=>{
    try{
        const heroid = req.params.id;
        const { herotitle, herodescription}= req.body;

        if(!heroid){
            return res.status(400).json({ error: "hero ID is required" });
        }

        const updatehero = await HeroSection.findByIdAndUpdate(
            heroid,
            {herotitle,herodescription},{new:true}
        );
        if(!updatehero){
            return res.status(404).json({ error: "hero not found" });
        }
        return res.json({message: "hero section is updated", hero:updatehero});
    }catch (error) {
        console.error("Error updating hero section:", error);
        return res.status(500).json({ error: "Failed to update hero section" });
    }
})


module.exports = router