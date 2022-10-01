const { Inhibitor } = require('gcommands')

class byID extends Inhibitor.Inhibitor {
  constructor(options) {
    super(options)

    // Pega o valor dentro que foi feito na hora de criar a classe e define como ID
    this.id = options
  }

  run(ctx, interaction) {
    // Testa se o membro está incluído nos IDS listados
    if (!this.id.includes(ctx.member?.id))
      return ctx.safeReply({
        content: 'Você não tem permissão para utilizar este comando!',
        ephemeral: true,
      })
    // Caso ele esteja, o true dará permissão para ele continuar com o comando
    else return true
  }
}

module.exports = byID
