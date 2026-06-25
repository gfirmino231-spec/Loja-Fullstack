import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field(() => ID)
  id: number;

  @Field()
  displayName: string;

  @Field()
  image: string;

  @Field(() => Int)
  stock: number;
}
