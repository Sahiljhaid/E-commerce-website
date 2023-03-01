const mongoose=require("mongoose")
const detail=mongoose.Schema({
    brandName :String,
    brandIcon :String,
    links:[
        {label:String,
            url:String
        },
        
    ],
});

module.exports=mongoose.model("detail",detail)