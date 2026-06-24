import { Resolver, Query } from '@nestjs/graphql';
import { Category } from './models/category.model';
import { CategoryService } from './category.service';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return this.categoryService.getAllCategories();
  }
}
