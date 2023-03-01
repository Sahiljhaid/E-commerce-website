const { request, response } = require('express')
const express = require('express')
const { route } = require('express/lib/application')
const contact = require('../models/contact')

const detail = require("../models/detail")
const service = require('../models/service')
const slider = require('../models/slider')
const banner = require('../models/banner')
const banner1 = require("../models/banner1")
const banner3 = require('../models/banner3')
const about = require('../models/about')
const footer = require('../models/footer')
const gallery=require('../models/gallery')




const routes = express.Router();

routes.get("/", async (req, res) => {

    const details = await detail.findOne({ "_id": "63b447a39fc0605590b909fd" })
    const slides = await slider.find()
    const banners = await banner.find()
    const banners1 = await banner1.find()
    const banner2 = await banner3.find()
    const abouts = await about.find()
    const footers = await footer.find()
    const gallerys = await gallery.find()
    //console.log(details)
    //console.log(slides)
    const services = await service.find()


    res.render("index", {
        details: details,
        slides: slides,
        services: services,
        banners: banners,
        banners1: banners1,
        banner2: banner2,
        abouts: abouts,
        footers: footers,
        gallerys:gallerys
    })
})

routes.get('/gallerys', async (req, res) => {
    const details = await detail.findOne({ "_id": "63b447a39fc0605590b909fd" })
    res.render("gallerys", {
        details: details,
    });
})
//CONTACT DB
routes.post('/process-contact-form', async (req, res) => {
    console.log("submited")
    console.log(req.body)

    //SAVE THE DATA TO DB
    try {
        const data = await contact.create(req.body)
        console.log(data)
        res.redirect("/")
    }
    catch (e) {
        console.log(e)
        res.redirect("/")
    }

})
module.exports = routes