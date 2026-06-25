import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CheckoutService } from './checkout.service';
import { ItemCompraInput } from './dto/item-compra.input';

@Resolver()
export class CheckoutResolver {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Mutation(() => Boolean)
  async finalizarCompra(
    @Args('itens', { type: () => [ItemCompraInput] }) itens: ItemCompraInput[],
  ): Promise<boolean> {
    return this.checkoutService.finalizarCompra(itens);
  }
}
