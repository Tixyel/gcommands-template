require('dotenv').config()
const { IntentsBitField } = require('discord.js')
const { GClient } = require('gcommands')
const { join } = require('path')

const client = new GClient({
  intents: new IntentsBitField().add(
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
  partials: ['MESSAGE', 'CHANNEL'],
  dirs: [join(__dirname, 'commands'), join(__dirname, 'modules'), join(__dirname, 'events')],
  language: 'portuguese',
  messagePrefix: '!',
})

client.login(process.env.DISCORD_TOKEN)
