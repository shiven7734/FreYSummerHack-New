const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const ejs = require('ejs');
const client=require('twilio')('ACe0889217646ab6a6cb001fafdeff3b2a','e8b908228f0ed3e920e7df8598fb93de')

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(__dirname + "/public"));
app.get('/',(req,res)=>{
   

    res.render('main');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('/maps',(req,res)=>{
    res.render('maps');
})
const port= process.env.PORT||3000
app.listen(port, () => {
    console.log('Serving on port 3000')
})

