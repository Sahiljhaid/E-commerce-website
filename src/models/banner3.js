const mongoose=require("mongoose")
const banner3=mongoose.Schema({
    title:String,
    description:String,
    link:String,
    imageurl:String
})

module.exports=mongoose.model("banner2",banner3)