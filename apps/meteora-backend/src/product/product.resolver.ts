import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Product } from './models/product.model';
import { Color } from './models/color.model';
import { Size } from './models/size.model';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async products(
    @Args('page', { type: () => Int, nullable: true }) page: number = 1,
    @Args('limit', { type: () => Int, nullable: true }) limit: number = 6,
  ): Promise<Product[]> {
    return this.productService.getProducts(page, limit);
  }

  @ResolveField(() => [Size])
  async sizes(@Parent() product: Product): Promise<Size[]> {
    return this.productService.getSizes(product.id);
  }

  @ResolveField(() => [Color])
  async colors(@Parent() product: Product): Promise<Color[]> {
    return this.productService.getColors(product.id);
  }
}
