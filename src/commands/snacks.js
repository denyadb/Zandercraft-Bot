module.exports = {
  meta: {
    help: 'I will give you some snacks.',
    usage: '<name>',
    module: 'Fun',
    level: 0,
    timeout: 5,
  },
  fn: function (msg, suffix) {
    msg.channel.createMessage('Here are some snacks! :cookie: :pizza: :fries: Use `+eat` to eat them! Enjoy!')
  }
}