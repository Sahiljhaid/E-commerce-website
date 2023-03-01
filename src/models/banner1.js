const mongoose=require("mongoose")
const banner1=mongoose.Schema({
    title:String,
    description:String,
    link:String,
    imageurl:String
})

module.exports=mongoose.model("banners1",banner1)