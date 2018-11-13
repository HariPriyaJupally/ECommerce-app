const express = require('express')
const http = require('http')
const expressLayouts = require('express-ejs-layouts')
const favicon = require('serve-favicon')
const path = require('path')
const bodyParser = require('body-parser')
const engines = require('consolidate')
const session = require('express-session')
const errorHandler = require('errorhandler')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const expressStatusMonitor = require('express-status-monitor')
const LOG = require('./utils/logger.js')
const logfile = '/access.log'
const app = express()  // make express app
const port = process.env.PORT  || 8081
const fs = require('fs')



dotenv.load({ path: '.env' })
LOG.info('Environment variables loaded.')
app.set('views', path.resolve(__dirname, 'views')) // path to views
app.set('view engine', 'ejs') // specifies our view engine



app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(expressLayouts)
app.use(errorHandler()) // load error handler


app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })

 app.get("/index", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })

 app.get("/products", function (req, res) {
  res.render("products.ejs")
 })

 app.get("/about", function (req, res) {
  res.render("aboutus.ejs")
 })

 app.get("/contact", function (req, res) {
  res.render("contactus.ejs")
 })

 app.get(function (req, res) {
  res.render('404')
})


require('./utils/seeder.js')(app)  
 
 
 app.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port)
  console.log('\nLogs will be sent to this terminal and ' + logfile + '.')
 })