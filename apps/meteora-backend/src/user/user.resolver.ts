import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async register(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    return this.userService.register(email, password);
  }

  @Mutation(() => User)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    return this.userService.login(email, password);
  }
}
