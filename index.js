/*
  CONGRATULATIONS on creating your first Botpress bot!

  This is the programmatic entry point of your bot.
  Your bot's logic resides here.

  Here's the next steps for you:
  1. Read this file to understand how this simple bot works
  2. Read the `content.yml` file to understand how messages are sent
  3. Install a connector module (Facebook Messenger and/or Slack)
  4. Customize your bot!

  Happy bot building!

  The Botpress Team
  ----
  Getting Started (Youtube Video): https://www.youtube.com/watch?v=HTpUmDz9kRY
  Documentation: https://botpress.io/docs
  Our Slack Community: https://slack.botpress.io
*/


const some = require('lodash/some')

module.exports = bp => {
  const log = bp.logger.debug
  log("-- STARTED HEARING --")
  bp.hear({'wit.entities.greetings': captures => some(captures, c => c.confidence > 0.9)}, event => {
    log('>> Greetings')
    event.reply('#welcome')
  })
}
