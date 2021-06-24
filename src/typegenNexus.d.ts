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
  Address: Prisma.Address
  Order: Prisma.Order
  OrderItem: Prisma.OrderItem
  Cart: Prisma.Cart
  CartItem: Prisma.CartItem
  WishList: Prisma.WishList
  Product: Prisma.Product
  Category: Prisma.Category
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'googleId' | 'facebookId' | 'email' | 'role' | 'passwordHash' | 'name' | 'photo' | 'createdAt' | 'updatedAt' | 'cart' | 'wishlist' | 'addresses' | 'orders'
      ordering: 'id' | 'googleId' | 'facebookId' | 'email' | 'role' | 'passwordHash' | 'name' | 'photo' | 'createdAt' | 'updatedAt'
    }
    addresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'completeName' | 'country' | 'street' | 'numberAndBlock' | 'zone' | 'region' | 'postal' | 'contact' | 'instructions' | 'active' | 'user' | 'orders' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'completeName' | 'country' | 'street' | 'numberAndBlock' | 'zone' | 'region' | 'postal' | 'contact' | 'instructions' | 'active' | 'userId' | 'createdAt' | 'updatedAt'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'address' | 'price' | 'quantity' | 'cardDetails' | 'state' | 'orderItems' | 'userId' | 'addressId' | 'deliveryDate' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'price' | 'quantity' | 'cardDetails' | 'state' | 'userId' | 'addressId' | 'deliveryDate' | 'createdAt' | 'updatedAt'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'order' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt'
    }
    carts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'cartItems' | 'price' | 'quantity' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'price' | 'quantity' | 'userId' | 'createdAt' | 'updatedAt'
    }
    cartItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'cart' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
    }
    wishLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'products' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'userId' | 'createdAt' | 'updatedAt'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'sales' | 'active' | 'categories' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt' | 'cartItems' | 'orderItems' | 'wishLists'
      ordering: 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'sales' | 'active' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt'
    }
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'sales' | 'header' | 'products' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'sales' | 'header' | 'createdAt' | 'updatedAt'
    }
  },
  User: {
    addresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'completeName' | 'country' | 'street' | 'numberAndBlock' | 'zone' | 'region' | 'postal' | 'contact' | 'instructions' | 'active' | 'user' | 'orders' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'completeName' | 'country' | 'street' | 'numberAndBlock' | 'zone' | 'region' | 'postal' | 'contact' | 'instructions' | 'active' | 'userId' | 'createdAt' | 'updatedAt'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'address' | 'price' | 'quantity' | 'cardDetails' | 'state' | 'orderItems' | 'userId' | 'addressId' | 'deliveryDate' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'price' | 'quantity' | 'cardDetails' | 'state' | 'userId' | 'addressId' | 'deliveryDate' | 'createdAt' | 'updatedAt'
    }
  }
  Address: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'address' | 'price' | 'quantity' | 'cardDetails' | 'state' | 'orderItems' | 'userId' | 'addressId' | 'deliveryDate' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'price' | 'quantity' | 'cardDetails' | 'state' | 'userId' | 'addressId' | 'deliveryDate' | 'createdAt' | 'updatedAt'
    }
  }
  Order: {
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'order' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt'
    }
  }
  OrderItem: {

  }
  Cart: {
    cartItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'cart' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
    }
  }
  CartItem: {

  }
  WishList: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'sales' | 'active' | 'categories' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt' | 'cartItems' | 'orderItems' | 'wishLists'
      ordering: 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'sales' | 'active' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt'
    }
  }
  Product: {
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'sales' | 'header' | 'products' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'mainCategory' | 'subCategory' | 'name' | 'image' | 'sales' | 'header' | 'createdAt' | 'updatedAt'
    }
    cartItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'cart' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'cartId' | 'createdAt' | 'updatedAt'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'order' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'quantity' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt'
    }
    wishLists: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'products' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'userId' | 'createdAt' | 'updatedAt'
    }
  }
  Category: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'sales' | 'active' | 'categories' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt' | 'cartItems' | 'orderItems' | 'wishLists'
      ordering: 'id' | 'name' | 'description' | 'images' | 'price' | 'stock' | 'sales' | 'active' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan' | 'createdAt' | 'updatedAt'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    address: 'Address'
    addresses: 'Address'
    order: 'Order'
    orders: 'Order'
    orderItem: 'OrderItem'
    orderItems: 'OrderItem'
    cart: 'Cart'
    carts: 'Cart'
    cartItem: 'CartItem'
    cartItems: 'CartItem'
    wishList: 'WishList'
    wishLists: 'WishList'
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
    createOneAddress: 'Address'
    updateOneAddress: 'Address'
    updateManyAddress: 'AffectedRowsOutput'
    deleteOneAddress: 'Address'
    deleteManyAddress: 'AffectedRowsOutput'
    upsertOneAddress: 'Address'
    createOneOrder: 'Order'
    updateOneOrder: 'Order'
    updateManyOrder: 'AffectedRowsOutput'
    deleteOneOrder: 'Order'
    deleteManyOrder: 'AffectedRowsOutput'
    upsertOneOrder: 'Order'
    createOneOrderItem: 'OrderItem'
    updateOneOrderItem: 'OrderItem'
    updateManyOrderItem: 'AffectedRowsOutput'
    deleteOneOrderItem: 'OrderItem'
    deleteManyOrderItem: 'AffectedRowsOutput'
    upsertOneOrderItem: 'OrderItem'
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
    createOneWishList: 'WishList'
    updateOneWishList: 'WishList'
    updateManyWishList: 'AffectedRowsOutput'
    deleteOneWishList: 'WishList'
    deleteManyWishList: 'AffectedRowsOutput'
    upsertOneWishList: 'WishList'
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
    wishlist: 'WishList'
    addresses: 'Address'
    orders: 'Order'
  }
  Address: {
    id: 'String'
    completeName: 'String'
    country: 'String'
    street: 'String'
    numberAndBlock: 'String'
    zone: 'String'
    region: 'String'
    postal: 'String'
    contact: 'String'
    instructions: 'String'
    active: 'Boolean'
    user: 'User'
    orders: 'Order'
    userId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Order: {
    id: 'String'
    user: 'User'
    address: 'Address'
    price: 'Float'
    quantity: 'Int'
    cardDetails: 'String'
    state: 'String'
    orderItems: 'OrderItem'
    userId: 'String'
    addressId: 'String'
    deliveryDate: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  OrderItem: {
    id: 'String'
    product: 'Product'
    quantity: 'Int'
    order: 'Order'
    productId: 'String'
    orderId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Cart: {
    id: 'String'
    user: 'User'
    cartItems: 'CartItem'
    price: 'Float'
    quantity: 'Int'
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
  WishList: {
    id: 'String'
    user: 'User'
    products: 'Product'
    userId: 'String'
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
    sales: 'Int'
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
    orderItems: 'OrderItem'
    wishLists: 'WishList'
  }
  Category: {
    id: 'String'
    mainCategory: 'MainCategory'
    subCategory: 'SubCategory'
    name: 'String'
    image: 'String'
    sales: 'Int'
    header: 'Boolean'
    products: 'Product'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Address: Typegen.NexusPrismaFields<'Address'>
  Order: Typegen.NexusPrismaFields<'Order'>
  OrderItem: Typegen.NexusPrismaFields<'OrderItem'>
  Cart: Typegen.NexusPrismaFields<'Cart'>
  CartItem: Typegen.NexusPrismaFields<'CartItem'>
  WishList: Typegen.NexusPrismaFields<'WishList'>
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
  