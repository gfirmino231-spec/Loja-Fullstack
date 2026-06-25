import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Size {
  @Field(() => ID)
  id: number;

  @Field()
  displayName: string;

  @Field(() => Int)
  stock: number;
}
