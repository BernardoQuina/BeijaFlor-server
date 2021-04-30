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
  BoolNullableFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolNullableFilter'] | null; // NestedBoolNullableFilter
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
  NestedBoolNullableFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolNullableFilter'] | null; // NestedBoolNullableFilter
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
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    description?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    images?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    price?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    categories?: NexusGenInputs['CategoryListRelationFilter'] | null; // CategoryListRelationFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    images?: NexusGenInputs['StringNullableListFilter'] | null; // StringNullableListFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    price?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
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
    cloudinaryPhoto?: NexusGenEnums['SortOrder'] | null; // SortOrder
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
    cloudinaryPhoto?: NexusGenInputs['BoolNullableFilter'] | null; // BoolNullableFilter
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
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    facebookId?: string | null; // String
    googleId?: string | null; // String
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  MainCategory: "Acessorios" | "Flores" | "Ocasiao" | "Plantas"
  QueryMode: "default" | "insensitive"
  Role: "ADMIN" | "USER"
  SortOrder: "asc" | "desc"
  SubCategory: "arranjos" | "calendario" | "caracteristicas" | "cerimonias" | "cores" | "estacao" | "local" | "momentosEspeciais" | "outros" | "tipos" | "vasos"
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
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // String!
    images: string[]; // [String!]!
    name: string; // String!
    price: number; // Float!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Query: {};
  User: { // root type
    cloudinaryPhoto?: boolean | null; // Boolean
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    facebookId?: string | null; // String
    googleId?: string | null; // String
    id: string; // String!
    name: string; // String!
    photo?: string | null; // String
    role: NexusGenEnums['Role']; // Role!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
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
    createCategory: NexusGenRootTypes['Category'] | null; // Category
    createProduct: NexusGenRootTypes['Product'] | null; // Product
    deleteUser: NexusGenRootTypes['User'] | null; // User
    editUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['User'] | null; // User
    logout: boolean | null; // Boolean
    register: NexusGenRootTypes['User'] | null; // User
  }
  Product: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // String!
    images: string[]; // [String!]!
    name: string; // String!
    price: number; // Float!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    category: NexusGenRootTypes['Category'] | null; // Category
    categoryCount: number | null; // Int
    me: NexusGenRootTypes['User'] | null; // User
    product: NexusGenRootTypes['Product'] | null; // Product
    productCount: number | null; // Int
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    user: NexusGenRootTypes['User'] | null; // User
    userCount: number | null; // Int
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    cloudinaryPhoto: boolean | null; // Boolean
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
  }
}

export interface NexusGenFieldTypeNames {
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
    createCategory: 'Category'
    createProduct: 'Product'
    deleteUser: 'User'
    editUser: 'User'
    login: 'User'
    logout: 'Boolean'
    register: 'User'
  }
  Product: { // field return type name
    categories: 'Category'
    createdAt: 'DateTime'
    description: 'String'
    id: 'String'
    images: 'String'
    name: 'String'
    price: 'Float'
    updatedAt: 'DateTime'
  }
  Query: { // field return type name
    categories: 'Category'
    category: 'Category'
    categoryCount: 'Int'
    me: 'User'
    product: 'Product'
    productCount: 'Int'
    products: 'Product'
    user: 'User'
    userCount: 'Int'
    users: 'User'
  }
  User: { // field return type name
    cloudinaryPhoto: 'Boolean'
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
  }
}

export interface NexusGenArgTypes {
  Category: {
    products: { // args
      cursor?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Mutation: {
    createCategory: { // args
      image: string; // String!
      mainCategory: NexusGenEnums['MainCategory']; // MainCategory!
      name: string; // String!
      subCategory: NexusGenEnums['SubCategory']; // SubCategory!
    }
    createProduct: { // args
      categories: string[]; // [String!]!
      description: string; // String!
      images: string[]; // [String!]!
      name: string; // String!
      price: number; // Float!
    }
    deleteUser: { // args
      password?: string | null; // String
    }
    editUser: { // args
      confirmNewPassword?: string | null; // String
      password?: string | null; // String
      updateEmail?: string | null; // String
      updateName?: string | null; // String
      updatePassword?: string | null; // String
      updatePhoto?: string | null; // String
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
  }
  Product: {
    categories: { // args
      cursor?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Query: {
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