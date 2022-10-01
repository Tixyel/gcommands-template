require('dotenv').config()
const { IntentsBitField } = require('discord.js')
const { GClient } = require('gcommands')
const { join } = require('path')

// GClient é o client importado do gcommands para iniciar o bot
const client = new GClient({
  intents: new IntentsBitField().add(
    // Flags de intents
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.GuildIntegrations,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent
  ),
  // Partials definidos
  partials: ['MESSAGE', 'CHANNEL'],
  // Pastas onde se encontram os comandos, eventos, inibidores e componentes
  dirs: [join(__dirname, 'commands'), join(__dirname, 'modules'), join(__dirname, 'events')],
  // Tradução para respostas padrões do gcommands
  language: 'portuguese',
  // Prefixo para comandos de mensagem
  messagePrefix: '!',
})

// Login do bot com o token
client.login(process.env.DISCORD_TOKEN)
