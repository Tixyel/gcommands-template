const { Command, CommandType, AutoDeferType } = require('gcommands')
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const byID = require('../modules/inhibitors/byID')

new Command({
  // O nome do comando deve ser minusculo e sem espaçamentos
  name: 'hello',
  description: 'Comando utilizado somente para testes, não utilize sem permissão.',
  // Auto defer só serve quando o ctx.safeReply() é utilizado
  autoDefer: AutoDeferType.EPHEMERAL,
  // Inibidores são classes para serem testadas antes de executar o comando, assim podendo fazer verificações
  inhibitors: [new byID(['793343792048635924', '923032023969456138'])], // IDs de usuarios
  // Os tipos de comando são: SLASH, MESSAGE, CONTEXT_USER, CONTEXT_MESSAGE
  // Caso seja CONTEXT_USER ou CONTEXT_MESSAGE o nome poderá ter espaços e letras maiúsculas
  type: [CommandType.SLASH],
  run: async (ctx, interaction) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setEmoji('📦').setCustomId('teste').setLabel('Teste de componente!').setStyle(ButtonStyle.Secondary)
    )

    // O safe reply é feito para evitar erros na API do discord como "unknow interaction", pois ele responde o comando assim que executado e depois edita, ou seja, ele utiliza ctx.reply() e após ctx.editReply() para responder.
    ctx.safeReply({ content: 'Olá! Clique no botão abaixo para testar', ephemeral: true, components: [row] })
  },
})
