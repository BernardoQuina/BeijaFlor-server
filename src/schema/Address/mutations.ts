import { mutationField, nonNull, stringArg } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const createAddress = mutationField('createAddress', {
  type: 'Address',
  args: {
    completeName: nonNull(stringArg()),
    country: nonNull(stringArg()),
    street: nonNull(stringArg()),
    numberAndBlock: nonNull(stringArg()),
    zone: nonNull(stringArg()), // localidade
    region: nonNull(stringArg()), // distrito
    postal: nonNull(stringArg()),
    contact: nonNull(stringArg()),
    instructions: stringArg()
  },
  async resolve(_root, {
    completeName,
    country,
    street,
    numberAndBlock,
    zone,
    region,
    postal,
    contact,
    instructions
  }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Faça login para criar uma morada.')
    }

    const nameRegex =
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/


    if (!nameRegex.test(completeName)) {
      throw new Error(
        'Nome só pode conter caracteres alfanuméricos (ex: #?!@$%^&*- não é permitido) e tem de ser de 8 a 20.'
      )
    }

    return context.prisma.address.create({
      data: {
        user: {connect: {id: userId}},
        completeName,
        country,
        street,
        numberAndBlock,
        zone,
        region,
        postal,
        contact,
        instructions
      },
    })
  },
})
