// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const puppies = require('../data/puppies.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.puppies = new Datastore()
  db.puppies.loadDatabase()

  // insert the sample data into our data store
  db.puppies.insert(puppies)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.puppies = db.puppies.find(puppies)
  LOG.debug(`${app.locals.puppies.query.length} puppies seeded`)
  
  LOG.info('END Seeder. Sample data read and verified.')
}
