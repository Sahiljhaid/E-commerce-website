const mongoose=require("mongoose")
const footer=mongoose.Schema({
    title:String,
    linktext:String,
    link:String,
    
})

module.exports=mongoose.model("footers",footer)