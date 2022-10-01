const { Command, CommandType, Argument, ArgumentType, AutoDeferType } = require('gcommands')
const { ActionRowBuilder, TextInputStyle, ButtonBuilder, ButtonStyle } = require('discord.js')
const byID = require('../modules/inhibitors/byID')

new Command({
  name: 'hello',
  description: 'Comando utilizado somente para testes, não utilize sem permissão.',
  autoDefer: AutoDeferType.EPHEMERAL,
  inhibitors: [new byID(['793343792048635924', '923032023969456138'])], // IDs de usuarios
  type: [CommandType.SLASH],
  run: async (ctx, interaction) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setEmoji('📦').setCustomId('teste').setLabel('Teste de componente!').setStyle(ButtonStyle.Secondary)
    )

    ctx.safeReply({ content: 'Olá! Clique no botão abaixo para testar', ephemeral: true, components: [row] })
  },
})
