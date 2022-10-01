const { Component, ComponentType } = require('gcommands')

// Aqui é criado um componente que sempre que é recebido uma interaction é executado de acordo com o nome do ID
// name = custom id do componente
// Pode ser usado BUTTON, SELECT_MENU e MODAL
new Component({
  name: 'teste',
  type: [ComponentType.BUTTON],
  run: async (ctx, interaction) => {
    // Responde a interação
    await ctx.reply({ content: 'Você teve o seu componente respondido!', ephemeral: true })
  },
})
