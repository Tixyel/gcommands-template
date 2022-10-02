const { Command, CommandType, Argument, ArgumentType, Commands, Listeners, Components } = require('gcommands')

new Command({
  name: 'reload',
  description: 'Comando utilizado somente para testes, não utilize sem permissão.',
  type: [CommandType.SLASH],
  // Argumentos e seus tipos
  arguments: [
    new Argument({
      name: 'commands',
      description: 'Reinicia todos os comandos.',
      type: ArgumentType.SUB_COMMAND,
    }),
    new Argument({
      name: 'listeners',
      description: 'Reinicia todos os eventos.',
      type: ArgumentType.SUB_COMMAND,
    }),
    new Argument({
      name: 'components',
      description: 'Reinicia todos os componentes.',
      type: ArgumentType.SUB_COMMAND,
    }),
  ],

  run: async (ctx, interaction) => {
    const sub = ctx.arguments.getSubcommand()

    if (sub == 'commands') {
      Commands.map(async (command) => {
        await Commands.get(command.name).reload()
        console.log(`${command.name} foi reiniciado com sucesso!`)
      })
    } else if (sub == 'listeners') {
      Listeners.map(async (listener) => {
        await Listeners.get(listener.name).reload()
      })
    } else if (sub == 'components') {
      Components.map(async (component) => {
        await Components.get(component.name).reload()
      })
    }

    ctx.reply({ content: 'Comando executado.', ephemeral: true })
  },
})
