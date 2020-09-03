import { Query, Resolver, Args, Mutation, Int } from '@nestjs/graphql';

import { CreateUserInput, User } from './users.model';
import { UsersService } from './users.service.js';

@Resolver(of => User)
export class UsersResolver {

  constructor(private usersService: UsersService) {
  }

  @Query(returns => [User])
  async users(@Args('page', { type: () => Int }) page: number) {
    return this.usersService.getAllUsers(page);
  }

  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getUser(id);
  }

  @Mutation(returns => Boolean)
  async createUser(@Args('userData') userData: CreateUserInput) {
    return this.usersService.createUser(userData);
  }
}
