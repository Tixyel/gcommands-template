const { Command, CommandType, Argument, ArgumentType, Commands, Listeners, Components } = require('gcommands')

// os locais disponíveis são:
// 'en-US', 'en-GB', 'bg', 'zh-CN', 'zh-TW', 'hr', 'cs', 'da', 'nl', 'fi', 'fr', 'de', 'el', 'hi', 'hu', 'it', 'ja', 'ko', 'lt', 'no', 'pl', 'pt-BR', 'ro', 'ru', 'es-ES', 'sv-SE', 'th', 'tr', 'uk', 'vi'
// https://discord.com/developers/docs/reference#locales

new Command({
  // nome padrão do comando
  name: 'nome',
  // Dependendo da idioma do client do usuário que executar o comando ele irá adaptar de acordo com o que está definido abaixo, caso não esteja definido ele será o padrão
  nameLocalizations: {
    'pt-BR': 'nome',
    'en-GB': 'name',
    'en-US': 'name',
  },
  // descrição padrão do comando
  description: 'Comando utilizado somente para testes, não utilize sem permissão.',
  descriptionLocalizations: {
    'pt-BR': 'Comando utilizado somente para testes, não utilize sem permissão.',
    'en-GB': 'This command is for tests only, do not use it without permission.',
    'en-US': 'This command is for tests only, do not use it without permission.',
  },
  type: [CommandType.SLASH],

  run: async (ctx, interaction) => {
    ctx.reply({ content: 'Comando executado.', ephemeral: true })
  },
})
