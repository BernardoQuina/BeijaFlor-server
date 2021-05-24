/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  CartItemListRelationFilter: { // input type
    every?: NexusGenInputs['CartItemWhereInput'] | null; // CartItemWhereInput
    none?: NexusGenInputs['CartItemWhereInput'] | null; // CartItemWhereInput
    some?: NexusGenInputs['CartItemWhereInput'] | null; // CartItemWhereInput
  }
  CartItemOrderByInput: { // input type
    cartId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    productId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    quantity?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  CartItemWhereInput: { // input type
    AND?: NexusGenInputs['CartItemWhereInput'][] | null; // [CartItemWhereInput!]
    NOT?: NexusGenInputs['CartItemWhereInput'][] | null; // [CartItemWhereInput!]
    OR?: NexusGenInputs['CartItemWhereInput'][] | null; // [CartItemWhereInput!]
    cart?: NexusGenInputs['CartWhereInput'] | null; // CartWhereInput
    cartId?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    product?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    productId?: NexusGenInputs['StringFilter'] | null; // StringFilter
    quantity?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  CartItemWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  CartOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    price?: NexusGenEnums['SortOrder'] | null; // SortOrder
    quantity?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    userId?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  CartWhereInput: { // input type
    AND?: NexusGenInputs['CartWhereInput'][] | null; // [CartWhereInput!]
    NOT?: NexusGenInputs['CartWhereInput'][] | null; // [CartWhereInput!]
    OR?: NexusGenInputs['CartWhereInput'][] | null; // [CartWhereInput!]
    cartItems?: NexusGenInputs['CartItemListRelationFilter'] | null; // CartItemListRelationFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    price?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    quantity?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  CartWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  CategoryListRelationFilter: { // input type
    every?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    none?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    some?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
  }
  CategoryOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    image?: NexusGenEnums['SortOrder'] | null; // SortOrder
    mainCategory?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    subCategory?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  CategoryWhereInput: { // input type
    AND?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    NOT?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    OR?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    image?: NexusGenInputs['StringFilter'] | null; // StringFilter
    mainCategory?: NexusGenInputs['EnumMainCategoryFilter'] | null; // EnumMainCategoryFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    products?: NexusGenInputs['ProductListRelationFilter'] | null; // ProductListRelationFilter
    subCategory?: NexusGenInputs['EnumSubCategoryFilter'] | null; // EnumSubCategoryFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  CategoryWhereUniqueInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  EnumMainCategoryFilter: { // input type
    equals?: NexusGenEnums['MainCategory'] | null; // MainCategory
    in?: NexusGenEnums['MainCategory'][] | null; // [MainCategory!]
    not?: NexusGenInputs['NestedEnumMainCategoryFilter'] | null; // NestedEnumMainCategoryFilter
    notIn?: NexusGenEnums['MainCategory'][] | null; // [MainCategory!]
  }
  EnumRoleFilter: { // input type
    equals?: NexusGenEnums['Role'] | null; // Role
    in?: NexusGenEnums['Role'][] | null; // [Role!]
    not?: NexusGenInputs['NestedEnumRoleFilter'] | null; // NestedEnumRoleFilter
    notIn?: NexusGenEnums['Role'][] | null; // [Role!]
  }
  EnumSubCategoryFilter: { // input type
    equals?: NexusGenEnums['SubCategory'] | null; // SubCategory
    in?: NexusGenEnums['SubCategory'][] | null; // [SubCategory!]
    not?: NexusGenInputs['NestedEnumSubCategoryFilter'] | null; // NestedEnumSubCategoryFilter
    notIn?: NexusGenEnums['SubCategory'][] | null; // [SubCategory!]
  }
  FloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedBoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedEnumMainCategoryFilter: { // input type
    equals?: NexusGenEnums['MainCategory'] | null; // MainCategory
    in?: NexusGenEnums['MainCategory'][] | null; // [MainCategory!]
    not?: NexusGenInputs['NestedEnumMainCategoryFilter'] | null; // NestedEnumMainCategoryFilter
    notIn?: NexusGenEnums['MainCategory'][] | null; // [MainCategory!]
  }
  NestedEnumRoleFilter: { // input type
    equals?: NexusGenEnums['Role'] | null; // Role
    in?: NexusGenEnums['Role'][] | null; // [Role!]
    not?: NexusGenInputs['NestedEnumRoleFilter'] | null; // NestedEnumRoleFilter
    notIn?: NexusGenEnums['Role'][] | null; // [Role!]
  }
  NestedEnumSubCategoryFilter: { // input type
    equals?: NexusGenEnums['SubCategory'] | null; // SubCategory
    in?: NexusGenEnums['SubCategory'][] | null; // [SubCategory!]
    not?: NexusGenInputs['NestedEnumSubCategoryFilter'] | null; // NestedEnumSubCategoryFilter
    notIn?: NexusGenEnums['SubCategory'][] | null; // [SubCategory!]
  }
  NestedFloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  ProductListRelationFilter: { // input type
    every?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    none?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    some?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
  }
  ProductOrderByInput: { // input type
    active?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    description?: NexusGenEnums['SortOrder'] | null; // SortOrder
    exposure?: NexusGenEnums['SortOrder'] | null; // SortOrder
    height?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    images?: NexusGenEnums['SortOrder'] | null; // SortOrder
    lifespan?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    price?: NexusGenEnums['SortOrder'] | null; // SortOrder
    stock?: NexusGenEnums['SortOrder'] | null; // SortOrder
    temperature?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    water?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    active?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
    cartItems?: NexusGenInputs['CartItemListRelationFilter'] | null; // CartItemListRelationFilter
    categories?: NexusGenInputs['CategoryListRelationFilter'] | null; // CategoryListRelationFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    exposure?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    height?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    images?: NexusGenInputs['StringNullableListFilter'] | null; // StringNullableListFilter
    lifespan?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    price?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    stock?: NexusGenInputs['IntFilter'] | null; // IntFilter
    temperature?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    water?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    wishLists?: NexusGenInputs['WishListListRelationFilter'] | null; // WishListListRelationFilter
  }
  ProductWhereUniqueInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableListFilter: { // input type
    equals?: string[] | null; // [String!]
    has?: string | null; // String
    hasEvery?: string[] | null; // [String!]
    hasSome?: string[] | null; // [String!]
    isEmpty?: boolean | null; // Boolean
  }
  UserOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    email?: NexusGenEnums['SortOrder'] | null; // SortOrder
    facebookId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    googleId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    passwordHash?: NexusGenEnums['SortOrder'] | null; // SortOrder
    photo?: NexusGenEnums['SortOrder'] | null; // SortOrder
    role?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    cart?: NexusGenInputs['CartWhereInput'] | null; // CartWhereInput
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    facebookId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    googleId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    passwordHash?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    photo?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    role?: NexusGenInputs['EnumRoleFilter'] | null; // EnumRoleFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    wishlist?: NexusGenInputs['WishListWhereInput'] | null; // WishListWhereInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    facebookId?: string | null; // String
    googleId?: string | null; // String
    id?: string | null; // String
  }
  WishListListRelationFilter: { // input type
    every?: NexusGenInputs['WishListWhereInput'] | null; // WishListWhereInput
    none?: NexusGenInputs['WishListWhereInput'] | null; // WishListWhereInput
    some?: NexusGenInputs['WishListWhereInput'] | null; // WishListWhereInput
  }
  WishListOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    userId?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  WishListWhereInput: { // input type
    AND?: NexusGenInputs['WishListWhereInput'][] | null; // [WishListWhereInput!]
    NOT?: NexusGenInputs['WishListWhereInput'][] | null; // [WishListWhereInput!]
    OR?: NexusGenInputs['WishListWhereInput'][] | null; // [WishListWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    products?: NexusGenInputs['ProductListRelationFilter'] | null; // ProductListRelationFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  WishListWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  MainCategory: "Acessorios" | "Flores" | "Ocasiao" | "Plantas" | "none"
  QueryMode: "default" | "insensitive"
  Role: "ADMIN" | "USER"
  SortOrder: "asc" | "desc"
  SubCategory: "arranjos" | "calendario" | "caracteristicas" | "cerimonias" | "cores" | "estacao" | "local" | "momentosEspeciais" | "none" | "outros" | "tipos" | "tiposFlores" | "tiposPlantas" | "vasos"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Cart: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    price: number; // Float!
    quantity: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
  CartItem: { // root type
    cartId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    productId: string; // String!
    quantity: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Category: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    image: string; // String!
    mainCategory: NexusGenEnums['MainCategory']; // MainCategory!
    name: string; // String!
    subCategory: NexusGenEnums['SubCategory']; // SubCategory!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: {};
  Product: { // root type
    active: boolean; // Boolean!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    exposure?: string | null; // String
    height?: string | null; // String
    id: string; // String!
    images: string[]; // [String!]!
    lifespan?: string | null; // String
    name: string; // String!
    price: number; // Float!
    stock: number; // Int!
    temperature?: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    water?: string | null; // String
  }
  Query: {};
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    facebookId?: string | null; // String
    googleId?: string | null; // String
    id: string; // String!
    name: string; // String!
    photo?: string | null; // String
    role: NexusGenEnums['Role']; // Role!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  WishList: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Cart: { // field return type
    cartItems: NexusGenRootTypes['CartItem'][]; // [CartItem!]!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    price: number; // Float!
    quantity: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  CartItem: { // field return type
    cart: NexusGenRootTypes['Cart']; // Cart!
    cartId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    product: NexusGenRootTypes['Product']; // Product!
    productId: string; // String!
    quantity: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Category: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    image: string; // String!
    mainCategory: NexusGenEnums['MainCategory']; // MainCategory!
    name: string; // String!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    subCategory: NexusGenEnums['SubCategory']; // SubCategory!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: { // field return type
    changeItemQuantity: NexusGenRootTypes['CartItem'] | null; // CartItem
    changeProductStatus: NexusGenRootTypes['Product'] | null; // Product
    createCartItem: NexusGenRootTypes['CartItem'] | null; // CartItem
    createCategory: NexusGenRootTypes['Category'] | null; // Category
    createProduct: NexusGenRootTypes['Product'] | null; // Product
    deleteCategory: boolean | null; // Boolean
    deleteProduct: boolean | null; // Boolean
    deleteUser: NexusGenRootTypes['User'] | null; // User
    editCategory: NexusGenRootTypes['Category'] | null; // Category
    editProduct: NexusGenRootTypes['Product'] | null; // Product
    editUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['User'] | null; // User
    logout: boolean | null; // Boolean
    register: NexusGenRootTypes['User'] | null; // User
    removeItem: boolean | null; // Boolean
    toggleFromWishList: NexusGenRootTypes['WishList'] | null; // WishList
  }
  Product: { // field return type
    active: boolean; // Boolean!
    cartItems: NexusGenRootTypes['CartItem'][]; // [CartItem!]!
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    exposure: string | null; // String
    height: string | null; // String
    id: string; // String!
    images: string[]; // [String!]!
    lifespan: string | null; // String
    name: string; // String!
    price: number; // Float!
    stock: number; // Int!
    temperature: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    water: string | null; // String
    wishLists: NexusGenRootTypes['WishList'][]; // [WishList!]!
  }
  Query: { // field return type
    cart: NexusGenRootTypes['Cart'] | null; // Cart
    cartItem: NexusGenRootTypes['CartItem'] | null; // CartItem
    cartItems: NexusGenRootTypes['CartItem'][]; // [CartItem!]!
    carts: NexusGenRootTypes['Cart'][]; // [Cart!]!
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    category: NexusGenRootTypes['Category'] | null; // Category
    categoryCount: number | null; // Int
    inactiveCount: number | null; // Int
    me: NexusGenRootTypes['User'] | null; // User
    outOfStockCount: number | null; // Int
    product: NexusGenRootTypes['Product'] | null; // Product
    productCount: number | null; // Int
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    user: NexusGenRootTypes['User'] | null; // User
    userCount: number | null; // Int
    users: NexusGenRootTypes['User'][]; // [User!]!
    wishList: NexusGenRootTypes['WishList'] | null; // WishList
    wishLists: NexusGenRootTypes['WishList'][]; // [WishList!]!
  }
  User: { // field return type
    cart: NexusGenRootTypes['Cart'] | null; // Cart
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    facebookId: string | null; // String
    googleId: string | null; // String
    id: string; // String!
    name: string; // String!
    passwordHash: string | null; // String
    photo: string | null; // String
    role: NexusGenEnums['Role']; // Role!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    wishlist: NexusGenRootTypes['WishList'] | null; // WishList
  }
  WishList: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Cart: { // field return type name
    cartItems: 'CartItem'
    createdAt: 'DateTime'
    id: 'String'
    price: 'Float'
    quantity: 'Int'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
  CartItem: { // field return type name
    cart: 'Cart'
    cartId: 'String'
    createdAt: 'DateTime'
    id: 'String'
    product: 'Product'
    productId: 'String'
    quantity: 'Int'
    updatedAt: 'DateTime'
  }
  Category: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    image: 'String'
    mainCategory: 'MainCategory'
    name: 'String'
    products: 'Product'
    subCategory: 'SubCategory'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    changeItemQuantity: 'CartItem'
    changeProductStatus: 'Product'
    createCartItem: 'CartItem'
    createCategory: 'Category'
    createProduct: 'Product'
    deleteCategory: 'Boolean'
    deleteProduct: 'Boolean'
    deleteUser: 'User'
    editCategory: 'Category'
    editProduct: 'Product'
    editUser: 'User'
    login: 'User'
    logout: 'Boolean'
    register: 'User'
    removeItem: 'Boolean'
    toggleFromWishList: 'WishList'
  }
  Product: { // field return type name
    active: 'Boolean'
    cartItems: 'CartItem'
    categories: 'Category'
    createdAt: 'DateTime'
    description: 'String'
    exposure: 'String'
    height: 'String'
    id: 'String'
    images: 'String'
    lifespan: 'String'
    name: 'String'
    price: 'Float'
    stock: 'Int'
    temperature: 'String'
    updatedAt: 'DateTime'
    water: 'String'
    wishLists: 'WishList'
  }
  Query: { // field return type name
    cart: 'Cart'
    cartItem: 'CartItem'
    cartItems: 'CartItem'
    carts: 'Cart'
    categories: 'Category'
    category: 'Category'
    categoryCount: 'Int'
    inactiveCount: 'Int'
    me: 'User'
    outOfStockCount: 'Int'
    product: 'Product'
    productCount: 'Int'
    products: 'Product'
    user: 'User'
    userCount: 'Int'
    users: 'User'
    wishList: 'WishList'
    wishLists: 'WishList'
  }
  User: { // field return type name
    cart: 'Cart'
    createdAt: 'DateTime'
    email: 'String'
    facebookId: 'String'
    googleId: 'String'
    id: 'String'
    name: 'String'
    passwordHash: 'String'
    photo: 'String'
    role: 'Role'
    updatedAt: 'DateTime'
    wishlist: 'WishList'
  }
  WishList: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    products: 'Product'
    updatedAt: 'DateTime'
    user: 'User'
    userId: 'String'
  }
}

export interface NexusGenArgTypes {
  Cart: {
    cartItems: { // args
      cursor?: NexusGenInputs['CartItemWhereUniqueInput'] | null; // CartItemWhereUniqueInput
      orderBy?: NexusGenInputs['CartItemOrderByInput'][] | null; // [CartItemOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Category: {
    products: { // args
      cursor?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Mutation: {
    changeItemQuantity: { // args
      cartId: string; // String!
      cartItemId: string; // String!
      plusOrMinusOne: number; // Int!
      productId: string; // String!
    }
    changeProductStatus: { // args
      whereId: string; // String!
    }
    createCartItem: { // args
      cartId: string; // String!
      productId: string; // String!
      quantity: number; // Int!
    }
    createCategory: { // args
      image: string; // String!
      mainCategory: NexusGenEnums['MainCategory']; // MainCategory!
      name: string; // String!
      subCategory: NexusGenEnums['SubCategory']; // SubCategory!
    }
    createProduct: { // args
      categories: string[]; // [String!]!
      description: string; // String!
      exposure?: string | null; // String
      height?: string | null; // String
      images: string[]; // [String!]!
      lifespan?: string | null; // String
      name: string; // String!
      price: number; // Float!
      stock: number; // Int!
      temperature?: string | null; // String
      water?: string | null; // String
    }
    deleteCategory: { // args
      whereId: string; // String!
    }
    deleteProduct: { // args
      whereId: string; // String!
    }
    deleteUser: { // args
      password?: string | null; // String
    }
    editCategory: { // args
      image?: string | null; // String
      mainCategory?: NexusGenEnums['MainCategory'] | null; // MainCategory
      name?: string | null; // String
      subCategory?: NexusGenEnums['SubCategory'] | null; // SubCategory
      whereId: string; // String!
    }
    editProduct: { // args
      categories?: string[] | null; // [String!]
      description?: string | null; // String
      exposure?: string | null; // String
      height?: string | null; // String
      images?: string[] | null; // [String!]
      lifespan?: string | null; // String
      name?: string | null; // String
      price?: number | null; // Float
      stock?: number | null; // Int
      temperature?: string | null; // String
      water?: string | null; // String
      whereId: string; // String!
    }
    editUser: { // args
      confirmNewPassword?: string | null; // String
      password?: string | null; // String
      updateEmail?: string | null; // String
      updateName?: string | null; // String
      updatePassword?: string | null; // String
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    register: { // args
      confirmPassword: string; // String!
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    removeItem: { // args
      cartId: string; // String!
      cartItemId: string; // String!
      productId: string; // String!
    }
    toggleFromWishList: { // args
      merge?: boolean | null; // Boolean
      productId: string; // String!
      wishListId: string; // String!
    }
  }
  Product: {
    cartItems: { // args
      cursor?: NexusGenInputs['CartItemWhereUniqueInput'] | null; // CartItemWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    categories: { // args
      cursor?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    wishLists: { // args
      cursor?: NexusGenInputs['WishListWhereUniqueInput'] | null; // WishListWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Query: {
    cart: { // args
      where: NexusGenInputs['CartWhereUniqueInput']; // CartWhereUniqueInput!
    }
    cartItem: { // args
      where: NexusGenInputs['CartItemWhereUniqueInput']; // CartItemWhereUniqueInput!
    }
    cartItems: { // args
      cursor?: NexusGenInputs['CartItemWhereUniqueInput'] | null; // CartItemWhereUniqueInput
      orderBy?: NexusGenInputs['CartItemOrderByInput'][] | null; // [CartItemOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['CartItemWhereInput'] | null; // CartItemWhereInput
    }
    carts: { // args
      cursor?: NexusGenInputs['CartWhereUniqueInput'] | null; // CartWhereUniqueInput
      orderBy?: NexusGenInputs['CartOrderByInput'][] | null; // [CartOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['CartWhereInput'] | null; // CartWhereInput
    }
    categories: { // args
      cursor?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      orderBy?: NexusGenInputs['CategoryOrderByInput'][] | null; // [CategoryOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    }
    category: { // args
      where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
    }
    product: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    products: { // args
      cursor?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      orderBy?: NexusGenInputs['ProductOrderByInput'][] | null; // [ProductOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      cursor?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      orderBy?: NexusGenInputs['UserOrderByInput'][] | null; // [UserOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    wishList: { // args
      where: NexusGenInputs['WishListWhereUniqueInput']; // WishListWhereUniqueInput!
    }
    wishLists: { // args
      cursor?: NexusGenInputs['WishListWhereUniqueInput'] | null; // WishListWhereUniqueInput
      orderBy?: NexusGenInputs['WishListOrderByInput'][] | null; // [WishListOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
      where?: NexusGenInputs['WishListWhereInput'] | null; // WishListWhereInput
    }
  }
  WishList: {
    products: { // args
      cursor?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}