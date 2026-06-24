/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  displayName: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Color = {
  __typename?: 'Color';
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Product = {
  __typename?: 'Product';
  colors: Array<Color>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  seller: Seller;
  sizes: Array<Size>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  products: Array<Product>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Seller = {
  __typename?: 'Seller';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Size = {
  __typename?: 'Size';
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};
