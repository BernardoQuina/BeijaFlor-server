import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.googleId()
    t.model.facebookId()
    t.model.email()
    t.model.passwordHash()
    t.model.name()
    t.model.photo()
    t.model.cloudinaryPhoto()
    t.model.createdAt()
    t.model.updatedAt()
  }
})