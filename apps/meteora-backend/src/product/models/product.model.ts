import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Seller } from './seller.model';
import { Size } from './size.model';
import { Color } from './color.model';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field(() => Seller)
  seller: Seller;

  @Field(() => [Size])
  sizes?: Size[];

  @Field(() => [Color])
  colors?: Color[];
}
