const Command = require('../../classes/Command')

module.exports = new Command(async function (msg) {
  const request = require('superagent')
  const res = await request.get('https://api.adviceslip.com/advice')
  try {
    const advice = (JSON.parse(res.text)).slip.advice
    this.safeSendMessage(msg.channel, advice)
  } catch (e) {
    logger.error(e)
    this.safeSendMessage(msg.channel, 'Something went wrong!')
  }
})
