const mongoose=require("mongoose")
const gallery=mongoose.Schema({
    title:String,
    Paragraph:String,
    imageUrl:String,
     link:String
})

module.exports=mongoose.model('gallery',gallery)