import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Cart: Prisma.Cart
  CartItem: Prisma.CartItem
  Product: Prisma.Product
  Category: Prisma.Category
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'googleId' | 'facebookId' | 'email' | 'role' | 'passwordHash' | 'name' | 'photo' | 'createdAt' | 'updatedAt' | 'cart'
      ordering: 'id' | 'googleId' | 'facebookId' | 'email' | 'role' | 'passwordHash' | 'name' | 'photo' | 'createdAt' | 'updatedAt'
    }
    carts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'cartItems' | 'price' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'price' | 'userId' | 'createdAt' | 'updatedAt'
    }
    cartItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'cart' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'active' | 'categories' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt' | 'cartItems'
      ordering: 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'active' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt'
    }
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'products' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'createdAt' | 'updatedAt'
    }
  },
  User: {

  }
  Cart: {
    cartItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'cart' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
    }
  }
  CartItem: {

  }
  Product: {
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'products' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'createdAt' | 'updatedAt'
    }
    cartItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'cart' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
    }
  }
  Category: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'active' | 'categories' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt' | 'cartItems'
      ordering: 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'active' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    cart: 'Cart'
    carts: 'Cart'
    cartItem: 'CartItem'
    cartItems: 'CartItem'
    product: 'Product'
    products: 'Product'
    category: 'Category'
    categories: 'Category'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneCart: 'Cart'
    updateOneCart: 'Cart'
    updateManyCart: 'AffectedRowsOutput'
    deleteOneCart: 'Cart'
    deleteManyCart: 'AffectedRowsOutput'
    upsertOneCart: 'Cart'
    createOneCartItem: 'CartItem'
    updateOneCartItem: 'CartItem'
    updateManyCartItem: 'AffectedRowsOutput'
    deleteOneCartItem: 'CartItem'
    deleteManyCartItem: 'AffectedRowsOutput'
    upsertOneCartItem: 'CartItem'
    createOneProduct: 'Product'
    updateOneProduct: 'Product'
    updateManyProduct: 'AffectedRowsOutput'
    deleteOneProduct: 'Product'
    deleteManyProduct: 'AffectedRowsOutput'
    upsertOneProduct: 'Product'
    createOneCategory: 'Category'
    updateOneCategory: 'Category'
    updateManyCategory: 'AffectedRowsOutput'
    deleteOneCategory: 'Category'
    deleteManyCategory: 'AffectedRowsOutput'
    upsertOneCategory: 'Category'
  },
  User: {
    id: 'String'
    googleId: 'String'
    facebookId: 'String'
    email: 'String'
    role: 'Role'
    passwordHash: 'String'
    name: 'String'
    photo: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    cart: 'Cart'
  }
  Cart: {
    id: 'String'
    user: 'User'
    cartItems: 'CartItem'
    price: 'Float'
    userId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  CartItem: {
    id: 'String'
    product: 'Product'
    quantity: 'Int'
    cart: 'Cart'
    productId: 'String'
    cartId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Product: {
    id: 'String'
    name: 'String'
    description: 'String'
    images: 'String'
    price: 'Float'
    stock: 'Int'
    active: 'Boolean'
    categories: 'Category'
    height: 'String'
    water: 'String'
    exposure: 'String'
    temperature: 'String'
    lifespan: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    cartItems: 'CartItem'
  }
  Category: {
    id: 'String'
    mainCategory: 'MainCategory'
    subCategory: 'SubCategory'
    name: 'String'
    image: 'String'
    products: 'Product'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Cart: Typegen.NexusPrismaFields<'Cart'>
  CartItem: Typegen.NexusPrismaFields<'CartItem'>
  Product: Typegen.NexusPrismaFields<'Product'>
  Category: Typegen.NexusPrismaFields<'Category'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  