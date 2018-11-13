// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const Customer = require('../data/Customer.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}
  const Order = require('../data/order.json')

  db.Customer = new Datastore()
  db.Customer.loadDatabase()


  // insert the sample data into our data store
  db.Customer.insert(Customer)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.Customer = db.Customer.find(Customer)
  LOG.debug(`${app.locals.Customer.query.length} customer seeded`)

  //Order need a customer -Amy White
  db.Order = new Datastore()
  db.Order.loadDatabase()

  //insert the sample data into our data store
  db.Order.insert(Order)

  //initialize app.locals(these ojects will be available to our controllers)
  app.locals.Order = db.Order.find(Order)
  LOG.debug('${app.locals.Order.query.length} Order seeded')
  
  LOG.info('END Seeder. Sample data read and verified.')
}
