const mongoose = require("mongoose")
const about = mongoose.Schema({
    title: String,
    description: String,
    link: String,

})

module.exports = mongoose.model("abouts", about)