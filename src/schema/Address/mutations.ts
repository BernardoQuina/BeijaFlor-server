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
    instructions: stringArg(),
  },
  async resolve(
    _root,
    {
      completeName,
      country,
      street,
      numberAndBlock,
      zone,
      region,
      postal,
      contact,
      instructions,
    },
    context
  ) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Faça login para criar uma morada.')
    }

    const nameRegex =
      /^(?=.{8,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/

    const postalPTRegex = /[0-9]{4}-[0-9]{3}$/

    if (!nameRegex.test(completeName)) {
      throw new Error(
        'Nome só pode conter caracteres alfanuméricos (ex: #?!@$%^&*- não é permitido) e tem de ser de 8 a 40.'
      )
    }

    if (street.length < 4) {
      throw new Error('Por favor insira uma morada.')
    }

    if (numberAndBlock.length < 1) {
      throw new Error(
        'Por favor insira o número da porta e, se aplicável, o andar/lote.'
      )
    }

    if (zone.length < 3) {
      throw new Error('Por favor insira a localidade.')
    }

    if (region.length < 3) {
      throw new Error('Por favor insira o distrito.')
    }

    if (!postalPTRegex.test(postal)) {
      throw new Error('Por favor insira um código postal válido.')
    }

    if (contact.length < 6) {
      throw new Error('Por favor insira um contacto.')
    }

    return context.prisma.address.create({
      data: {
        user: { connect: { id: userId } },
        completeName,
        country,
        street,
        numberAndBlock,
        zone,
        region,
        postal,
        contact,
        instructions,
      },
    })
  },
})

export const editAddress = mutationField('editAddress', {
  type: 'Address',
  args: {
    whereId: nonNull(stringArg()),
    completeName: nonNull(stringArg()),
    country: nonNull(stringArg()),
    street: nonNull(stringArg()),
    numberAndBlock: nonNull(stringArg()),
    zone: nonNull(stringArg()), // localidade
    region: nonNull(stringArg()), // distrito
    postal: nonNull(stringArg()),
    contact: nonNull(stringArg()),
    instructions: stringArg(),
  },
  async resolve(
    _root,
    {
      whereId,
      completeName,
      country,
      street,
      numberAndBlock,
      zone,
      region,
      postal,
      contact,
      instructions,
    },
    context
  ) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Faça login para editar uma morada.')
    }

    const addressExists = await context.prisma.address.findUnique({
      where: { id: whereId },
    })

    if (!addressExists) {
      throw new Error('Esta morada já não existe.')
    }

    const nameRegex =
      /^(?=.{8,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/

    const postalPTRegex = /[0-9]{4}-[0-9]{3}$/

    if (!nameRegex.test(completeName)) {
      throw new Error(
        'Nome só pode conter caracteres alfanuméricos (ex: #?!@$%^&*- não é permitido) e tem de ser de 8 a 40.'
      )
    }

    if (street.length < 4) {
      throw new Error('Por favor insira uma morada.')
    }

    if (numberAndBlock.length < 1) {
      throw new Error(
        'Por favor insira o número da porta e, se aplicável, o andar/lote.'
      )
    }

    if (zone.length < 3) {
      throw new Error('Por favor insira a localidade.')
    }

    if (region.length < 3) {
      throw new Error('Por favor insira o distrito.')
    }

    if (!postalPTRegex.test(postal)) {
      throw new Error('Por favor insira um código postal válido.')
    }

    if (contact.length < 6) {
      throw new Error('Por favor insira um contacto.')
    }

    return context.prisma.address.update({
      where: { id: whereId },
      data: {
        completeName,
        country,
        street,
        numberAndBlock,
        zone,
        region,
        postal,
        contact,
        instructions,
      },
    })
  },
})

export const deleteAddress = mutationField('deleteAddress', {
  type: 'Boolean',
  args: {
    whereId: nonNull(stringArg()),
  },
  async resolve(_root, { whereId }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Faça login para eliminar morada.')
    }

    const addressExists = await context.prisma.address.findUnique({
      where: { id: whereId },
    })

    if (!addressExists) {
      throw new Error('O produto que pretende eliminar não existe.')
    }

    const deletedAddress = await context.prisma.address.delete({
      where: { id: whereId },
    })

    if (deletedAddress) {
      return true
    } else {
      throw new Error('Não foi possível concluir a operação.')
    }
  },
})
