const mongoose=require("mongoose")
const banner=mongoose.Schema({
    title:String,
    description:String,
    link:String,
    linkText:String
})

module.exports=mongoose.model("banners",banner)