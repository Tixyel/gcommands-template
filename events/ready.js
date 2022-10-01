const { Listener } = require('gcommands')

new Listener({
  // O nome é feito para diferenciar um evento de outro, mesmo que o evento seja o mesmo você pode repetir eles
  name: 'ready',
  // Evento do discord.js
  event: 'ready',
  // once é para o evento ser executado apenas UMA vez a cada reinicio do bot
  once: true,

  async run(client) {
    let users = 0
    for (let guild of [...client.guilds.cache.values()]) users += guild.memberCount

    console.log(
      [
        '\x1b[95m',
        ``,
        `\x1b[35m${client.user.tag}\x1b[95m está online!`,
        ``,
        `Com \x1b[35m${client.guilds.cache.size}\x1b[95m servidores`,
        `Com \x1b[35m${users}\x1b[95m usuários.`,
        ``,
        '\x1b[0m',
      ].join('\n')
    )

    // Definindo o custom presence do Bot
    client.user.setPresence({
      status: 'dnd',
      activities: [
        {
          name: 'Jogando Tal coisa',
          type: 'PLAYING',
        },
      ],
    })
  },
})
