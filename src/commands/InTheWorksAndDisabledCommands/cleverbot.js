const request = require('superagent')
var Cleverbot = require('cleverbot.io')
var cleverbot = new Cleverbot(process.env.CLEVERBOT_USER, process.env.CLEVERBOT_KEY)

module.exports = {
  meta: {
    help: 'Talk to Cleverbot.',
    module: 'Fun',
    level: 0,
    timeout: 10,
    alias: ['clever', 'talk', 'chat']
  },
  fn: function (msg, suffix) {
    cleverbot.create(function (err, session) {
      if (!err && res.status === 200) {
        cleverbot.setNick('zandercraftbot')
        cleverbot.ask(suffix, function (e, r) {
          if (e) global.logger.error(e)
          msg.channel.createMessage(r)
        })
      } else {
        global.i18n.send('API_ERROR', msg.channel)
        global.logger.error(`REST call failed: ${err}`)
      }
    })
  }
}
