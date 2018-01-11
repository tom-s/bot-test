const some = require('lodash/some')

// Constants
const CONFIDENCE_THRESHOLD = 0.8

// Helpers
const isFound = entitiesArray => some(entitiesArray, c => c.confidence > CONFIDENCE_THRESHOLD)

// Hearing
module.exports = bp => {
  const log = bp.logger.debug
  log("-- STARTED HEARING --")

  // Greetings
  bp.hear({'wit.entities.greetings': isFound}, event => {
    log('>> greetings')
    event.reply('#welcome')
  })
  bp.hear({'wit.entities.bye': isFound}, event => {
    log('>> bye')
    event.reply('#goodbye')
  })

  // Other stuff
}
