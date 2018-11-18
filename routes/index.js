/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  LOG.debug('Request to /')
  res.render('index.ejs', { title: 'Express App' })
})

// Defer path requests to a particular controller
// router.use('/about', require('../controllers/about.js'))
router.use('/orderLine', require('../controllers/orderLine.js'))
router.use('/order', require('../controllers/order.js'))
<<<<<<< HEAD
router.use('/Customer', require('../controllers/Customer.js'))
=======
router.use('/products', require('../controllers/products.js'))


>>>>>>> 3faf94071984e99581e1c3ac3fb250fbbc762c40

LOG.debug('END routing')
module.exports = router