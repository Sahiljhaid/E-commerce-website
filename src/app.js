// console.log("project started");
// console.log("project started 2");
// const { request } = require("express");
const express = require("express")
const hbs = require("hbs")

const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const app = express();
const routes = require('./routes/main')
const detail = require("./models/detail")
const slider = require("./models/slider")
const service = require("./models/service")
const banner = require("./models/banner")
const banner1 = require("./models/banner1")
const banner3 = require("./models/banner3")
const about = require("./models/about")
const footer = require("./models/footer")
const gallery = require("./models/gallery")

app.use(express.urlencoded({
    extended: true
}))
app.use('/static', express.static("public"))
app.use('', routes)


//((TEMPLATE ENGINEE))

app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")//For NEVBAR
//db Connection
mongoose.connect("mongodb://localhost/website_tut", () => {
    console.log("db connected")


// gallery.create([
//     {
//         title:'ACHIVMENT 1',
//     Paragraph:'In this section we have our ACHIVMENT',
//     imageUrl:'/static/images/g1.webp',
//      link:'support'
//     },
//     {
//         title:'ACHIVMENT 2',
//     Paragraph:'In this section we have our ACHIVMENT',
//     imageUrl:'/static/images/g1.webp',
//      link:'support'
//     },
//     {
//         title:'ACHIVMENT 3',
//     Paragraph:'In this section we have our ACHIVMENT',
//     imageUrl:'/static/images/g1.webp',
//      link:'support'
//     },
//     {
//         title:'ACHIVMENT 4',
//     Paragraph:'In this section we have our ACHIVMENT',
//     imageUrl:'/static/images/g1.webp',
//      link:'support'
//     },
// ])


    // footer.create([
    //     {
    //         title:'@ 2022 Copyright:' ,
    //         linktext:'https://mdbootstrap.com/',
    //         link:'Shopssy',

    //     }
    // ])
    // about.create([
    //     {
    //     title:'About us',
    //     description:'GYBHBJH HYGYG HHUH JHUH HYGVG JHUHUHKJIHUGVG IHUG HGY JIGFE HYGTFFFCVBBKH UY',
    //     link:'CONTACT US',
    //     }
    // ])

    //    banner1.create([
    //          {
    //            title: 'Tech gives the quietest student a voice.',
    //              description: 'This is where our company is enabling students to get a well-paid job in the tech industry,irrespective of their educational degree or background.Shopssy is an effective way to create an efficient talent pipeline. It has become a top priority among people who are seeking a job in the tech industry.',
    //              link: 'Click Me',
    //              imageurl: '/static/images/s9.webp'
    //         }
    //     ])
    //   banner3.create([
    //      {
    //        title:' Tech gives the quietest student a voice.',
    //          description:'This is where our company is enabling students to get a well-paid job in the tech industry,irrespective of their educational degree or background.Shopssy is an effective way to create an efficient talent pipeline. It has become a top priority among people who are seeking a job in the tech industry.',
    //          link:'Click Me',
    //          imageurl:'/static/images/s9.webp'
    //     }


    // ])


    //    banners.create([
    //          {
    //            title:' Tech gives the quietest student a voice.',
    //              description:'This is where our company is enabling students to get a well-paid job in the tech industry,irrespective of their educational degree or background.Shopssy is an effective way to create an efficient talent pipeline. It has become a top priority among people who are seeking a job in the tech industry.',
    //              link:'Click Me',
    //              imageurl:'/static/images/s9.webp'
    //         }


    //     ])


    //    banner.create([
    //     {
    //         title:' Start learning new tech here !!!',
    //         description:'It Helps Learners Stay Up To Date With New Technological Advancements. Students who are able to stay up to date with the latest technological advancements will be able to improve their knowledge of different fields and develop new skills that they can use in the future',
    //         link:'Learn New Tech',
    //         linkText:'https://www.w3schools.com/whatis/'
    //     }

    //    ])




    //     service.create([
    //         {
    //             icon:'fa-brands fa-accusoft',
    //             title:'Provide Best Course',
    //             description:'We provide best course that gurantee 100%  of placment',
    //             linkText:'https://www.learnwebdevwithme.com',
    //             link:'Check'
    //         },
    //         {
    //             icon:'fa-brands fa-accusoft',
    //             title:'Learn Web-Development',
    //             description:'Web developers create and maintain websites. They are also responsible for the sites technical aspects, such as its performance and capacity, which are measures of a websites speed and how much traffic the site can handle. In addition, web developers may create content for the site.',
    //             linkText:'https://www.learnwebdevwithme.com',
    //             link:'Learn'
    //         },
    //         {
    //             icon:'fa-solid fa-display-code',
    //             title:'Learn Web-Development',
    //             description:'Web developers create and maintain websites. They are also responsible for the sites technical aspects, such as its performance and capacity, which are measures of a websites speed and how much traffic the site can handle. In addition, web developers may create content for the site.',
    //             linkText:'https://www.learnwebdevwithme.com',
    //             link:'Learn'
    //         },
    //     ])

    // slider.create([
    //     {
    //         title:'What about React',
    //         subTitle:'React makes it painless to create interactive UIs.Declarative views make your code more predictable and easier to debug.',
    //         imageUrl:"/static/images/s1.jpg"
    //     },
    //     {
    //         title:'What about javascript',
    //         subTitle:'JavaScript is the worlds most popular programming language.JavaScript is the programming language of the Web.',
    //         imageUrl:"/static/images/s3.jpg"
    //     },
    //     {
    //         title:'What is Mongodb ',
    //         subTitle:'Mongodb is Database ',
    //         imageUrl:"/static/images/s4.jpg"
    //     },
    //     {
    //         title:'What is Node js ',
    //         subTitle:'Nodejs is a runtime environment to execute javascript outside browser',
    //         imageUrl:"/static/images/s6.jpg"
    //     }
    // ])




    // detail.create({
    //     brandName:"SHOPSSY",
    //     brandIcon:"https://media.istockphoto.com/id/1291418648/vector/online-shopping-cart-icon.jpg?s=1024x1024&w=is&k=20&c=x2rhCOf72k7ztFuJp_5Ggi6OrTlG47Ow98QzRGcRlfQ=",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallerys"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },

    //     ]
    // })

})


mongoose.con

app.listen(process.env.PORT | 4000, () => {
    console.log("Server started");
})