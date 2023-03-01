const mongoose=require("mongoose");
const detail=mongoose.Schema({
    Image:String,
    Icon: String,
    links:[
        {
            label:String,
            url:String
        }
    ]


});

module.exports=mongoose.model("gallerys",gallery)