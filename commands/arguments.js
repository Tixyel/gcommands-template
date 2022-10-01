const { Command, CommandType, Argument, ArgumentType } = require('gcommands')

new Command({
  name: 'argumentos',
  description: 'Comando utilizado somente para testes, não utilize sem permissão.',
  type: [CommandType.SLASH],
  arguments: [
    new Argument({
      name: 'attachment',
      description: 'Argumento para arquivo',
      type: ArgumentType.ATTACHMENT,
      required: false,
    }),
    new Argument({
      name: 'boolean',
      description: 'Argumento para verdadeiro ou falso',
      type: ArgumentType.BOOLEAN,
      required: false,
    }),
    new Argument({
      name: 'channel',
      description: 'Argumento para canal',
      type: ArgumentType.CHANNEL,
      required: false,
    }),
    new Argument({
      name: 'integer',
      description: 'Argumento para número inteiro',
      type: ArgumentType.INTEGER,
      maxValue: 10,
      minValue: 1,
      required: false,
    }),
    new Argument({
      name: 'mentionable',
      description: 'Argumento para mencionável',
      type: ArgumentType.MENTIONABLE,
      required: false,
    }),
    new Argument({
      name: 'number',
      description: 'Argumento para número',
      type: ArgumentType.NUMBER,
      maxValue: 1000,
      minValue: 1,
      required: false,
    }),
    new Argument({
      name: 'role',
      description: 'Argumento para cargo',
      type: ArgumentType.ROLE,
      required: false,
    }),
    new Argument({
      name: 'string',
      description: 'Argumento para texto',
      type: ArgumentType.STRING,
      maxValue: 1000,
      minValue: 1,
      required: false,
    }),
    new Argument({
      name: 'user',
      description: 'Argumento para usuário',
      type: ArgumentType.USER,
      required: false,
    }),
  ],

  run: async (ctx, interaction) => {
    // dentro das aspas deve ser o nome do argumento definido acima

    const attachment = ctx.arguments.getAttachment('attachment')
    const boolean = ctx.arguments.getBoolean('boolean')
    const channel = ctx.arguments.getChannel('channel')
    const integer = ctx.arguments.getInteger('integer')
    const mentionable = ctx.arguments.getMentionable('mentionable')
    const number = ctx.arguments.getNumber('number')
    const role = ctx.arguments.getRole('role')
    const string = ctx.arguments.getString('string')
    const user = ctx.arguments.getUser('user')

    ctx.reply({ content: 'Nada aconteceu...', ephemeral: true })
  },
})
