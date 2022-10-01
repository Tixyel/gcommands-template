const { Component, ComponentType } = require('gcommands')

new Component({
  name: 'teste',
  type: [ComponentType.BUTTON],
  run: async (ctx, interaction) => {
    await ctx.reply({ content: 'Você teve o seu componente respondido!', ephemeral: true })
  },
})
