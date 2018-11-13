<<<<<<< HEAD
// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const Customer = require('../data/Customer.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.Customer = new Datastore()
  db.Customer.loadDatabase()

  // insert the sample data into our data store
  db.Customer.insert(Customer)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.Customer = db.Customer.find(Customer)
  LOG.debug(`${app.locals.Customer.query.length} customer seeded`)
  
  LOG.info('END Seeder. Sample data read and verified.')
}
=======
>>>>>>> c1200cb8258ec4763fb0b162a1460011091f2099
