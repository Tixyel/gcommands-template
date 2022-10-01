const { Listener } = require('gcommands')

new Listener({
  name: 'ready',
  event: 'ready',
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
