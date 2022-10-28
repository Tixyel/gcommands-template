const { Command, CommandType } = require('gcommands')
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js')

new Command({
  name: 'pagination',
  description: 'Comando utilizado somente para testes, não utilize sem permissão.',
  type: [CommandType.SLASH],
  run: async (ctx, interaction) => {
    // A página de inicio sempre deve ser 0
    let page = 0
    // Textos de outras páginas, lembre-se de colocar na ordem que você quer que a mensagem apareça
    let pages = [
      '```ansi\n[35mTexto 1```',
      '```ansi\n[35mTexto 2```',
      '```ansi\n[35mTexto 3```',
      '```ansi\n[35mTexto 4```',
      '```ansi\n[35mTexto 5```',
      '```ansi\n[35mTexto 6```',
    ]

    // criando o gerador de embed, onde retornará com as informações da pagina atual
    const genEmbed = (page, pages) => {
      const embed = new EmbedBuilder()
        .setColor('#c3a7e2')
        // Definindo o título para identificar a página atual, o + 1 é para a primeira página não se identificar como página 0
        .setTitle(`Página ${page + 1}`)
        // Mudando a descrição para os textos definidos e para o item da página correta
        .setDescription(pages[page])
        .setFooter({ text: 'Utilize os botões para mudar de pagina' })

      return [embed]
    }

    // criando o gerador de botões, onde ele retornará os botões utilizando as informações da pagina atual
    const genRow = (page, pages) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setEmoji('⬅️')
          .setCustomId('back')
          .setLabel('Voltar')
          .setStyle(ButtonStyle.Secondary)
          // Desativando o botão caso a página seja a primeira
          .setDisabled(page == 0),
        new ButtonBuilder()
          .setEmoji('↩️')
          .setCustomId('home')
          .setLabel('Inicio')
          .setStyle(ButtonStyle.Secondary)
          // Desativando o botão caso a página seja a primeira
          .setDisabled(page == 0),
        new ButtonBuilder()
          .setEmoji('➡️')
          .setCustomId('next')
          .setLabel('Próximo')
          .setStyle(ButtonStyle.Secondary)
          // Desativando o botão caso a página seja a ultima, assim não podendo ir para a próxima
          .setDisabled(page == pages.length - 1)
      )

      return [row]
    }

    // Respondendo e definindo como message com safeReply para evitar erros
    const message = await ctx.safeReply({
      // Aqui é executado os geradores para definir as informações da mensagem
      embeds: genEmbed(page, pages),
      components: genRow(page, pages),
      // Definindo como ephemeral para apenas o usuário que executou o comando poder visualizar
      ephemeral: true,
      // Ativando o fetch reply para que a resposta possa ser alterada
      fetchReply: true,
    })

    // Criando o collector apenas nessa mensagem
    const collector = message.createMessageComponentCollector({})

    collector.on('collect', (i) => {
      // Atualizando os botões para não dar erro de interação
      i.deferUpdate()
      // Afirmando que a resposta foi encontrada para ser editada
      ctx.fetchReply()

      // criando um switch para os botões clicados
      switch (i.customId) {
        case 'back':
          // Caso a página não for a primeira (que é 0) ele irá remover um
          if (page > 0) page--
          break
        case 'home':
          // Home é a primeira página identificada, ou seja, 0
          page = 0
          break
        case 'next':
          // Se a página for menor que o total de páginas ele adiciona mais uma, assim evitando erros
          if (page < pages.length - 1) page++
          break
      }

      // editando a reply que foi enviada anteriormente
      ctx.editReply({
        // Executando os geradores novamente com as novas informações
        embeds: genEmbed(page, pages),
        components: genRow(page, pages),
      })
    })
  },
})
