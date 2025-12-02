const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')
const jewelleryRoute = require('./routes/jewellery')
const herosection = require('./routes/hero')
const aboutsection = require('./routes/about')
const websitetitle = require('./routes/title')
const cors = require("cors");

const app=express();
const PORT = 8000;

app.use(cors({
  origin: "*",  // Allow frontend to access API
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"],  // Allowed HTTP methods
  credentials: true  // Allow cookies/auth headers
}));

mongoose.connect('mongodb://127.0.0.1:27017/jewellery-collage-project')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/user",userRoute)
app.use("/jewellery",jewelleryRoute)
app.use("/hero",herosection)
app.use("/about",aboutsection)
app.use("/title",websitetitle)
app.use(cors())

app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`))