var Commands = []

Commands.youtube = {
  name: 'youtube',
  help: 'I will desplay Zanders youtube link.',
  noDM: true,
  timeout: 10,
  overwrite: false,
  level: 0,
  fn: function(msg) {
    msg.channel.sendMessage('Check out Zanders youtube channel at https://www.youtube.com/channel/UC8eOTMZycMZL4NJDCk8jwxw')
  }
}

Commands.snacks = {
  name: 'snacks',
  help: 'I will give you some snacks.',
  noDM: true,
  timeout: 10,
  overwrite: false,
  level: 0,
  fn: function(msg) {
    msg.channel.sendMessage('Here are some snacks! :cookie: :pizza: :fries: Use `+eat` to eat them! Enjoy!')
  }
}

Commands.eat = {
  name: 'eat',
  help: 'Eat the snacks that I give you. __**Only use after using the +snacks command.**__',
  noDM: true,
  timeout: 10,
  overwrite: false,
  level: 0,
  fn: function(msg) {
    msg.channel.sendMessage('You just ate the snacks I gave you. I hope that they were yummy! :yum:')
  }
}

Commands.poop = {
  name: 'poop',
  help: 'You just pooped... Bruh.',
  noDM: true,
  timeout: 10,
  overwrite: false,
  level: 0,
  fn: function(msg) {
    msg.channel.sendMessage('Ewwwwwww... You just pooped :poop:... Bruh.')
  }
}

Commands.eatpoop = {
  name: 'eatpoop',
  help: 'Eat your poop. Why? Just Why? __**Only do after using the +poop command.**__',
  noDM: true,
  timeout: 10,
  overwrite: false,
  level: 0,
  fn: function(msg) {
    msg.channel.sendMessage('You just ate your poop! :poop: What the heck is wrong wth you?!')
  }
}

Commands.confirm = {
  name: 'eat',
  help: 'confirm that you got the message',
  noDM: true,
  timeout: 10,
  overwrite: false,
  level: 0,
  fn: function(msg) {
    msg.channel.sendMessage('By confirming this message, you just helped the Zandercraft Bots development. Thank you so much!')
  }
}

Commands.raid = {
  name: '',
  help: '',
  noDM: true,
  timeout: 10,
  overwrite: false,
  level: 4,
  fn: function(msg) {
    msg.channel.sendMessage('This command has been patched... Sorry for the inconvenience.')
  }
}

Commands.support = {
  name: 'support',
  help: 'I will provide some information on how to get support for the bot.',
  noDM: false,
  timeout: 10,
  overwrite: false,
  level: 0,
  fn: function(msg) {
    msg.channel.sendMessage('Our bot is having fatal errors! It is very important that you join our Official Support Server and follow all of the instructions there!: https://discord.gg/7Hjj2Ff')
  }
}

exports.Commands = Commands