import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';

import { CreateUserInput, User } from './users.model';
import { UsersService } from './users.service.js';

@Resolver(of => User)
export class UsersResolver {

  constructor(private usersService: UsersService) {
  }


  @Query(returns => [User])
  async users(@Args('page', { type: () => Number }) page: number) {
    return this.usersService.getAllUsers(page);
  }

  @Query(returns => User)
  async user(@Args('id', { type: () => Number }) id: number) {
    return this.usersService.getUser(id);
  }

  @Mutation(returns => Boolean)
  async createUser(@Args('userData') userData: CreateUserInput) {
    return this.usersService.createUser(userData);
  }
}
