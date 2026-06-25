import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ItemCompraInput {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  colorId: number;

  @Field(() => Int)
  sizeId: number;

  @Field(() => Int)
  quantidade: number;
}
