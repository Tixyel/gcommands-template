const { Listener } = require('gcommands')

new Listener({
  // O nome é feito para diferenciar um evento de outro, mesmo que o evento seja o mesmo você pode repetir eles
  name: 'interactionCreate',
  // Evento do discord.js
  event: 'interactionCreate',

  async run(interaction) {
    // Evento de interaction
  },
})
