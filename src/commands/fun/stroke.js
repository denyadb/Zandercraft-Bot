const Command = require('../../classes/Command')

module.exports = new Command(function (msg) {
  const request = require('superagent')
  request.get('https://api.icndb.com/jokes/random')
    .query({ escape: 'javascript' })
    .then(res => {
      if (res.statusCode !== 200) return this.safeSendMessage(msg.channel, 'Something went wrong!')
      return this.safeSendMessage(msg.channel, res.body.value.joke)
    })
})
