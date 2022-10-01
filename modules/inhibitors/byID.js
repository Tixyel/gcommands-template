const { Inhibitor } = require('gcommands')

class byID extends Inhibitor.Inhibitor {
  constructor(options) {
    super(options)

    this.id = options
  }

  run(ctx, interaction) {
    if (!this.id.includes(ctx.member?.id))
      return ctx.safeReply({
        content: 'Você não tem permissão para utilizar este comando!',
        ephemeral: true,
      })
    else return true
  }
}

module.exports = byID
