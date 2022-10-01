const { Listener } = require('gcommands')

new Listener({
  name: 'interactionCreate',
  event: 'interactionCreate',

  async run(interaction) {},
})
