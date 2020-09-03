import { Query, Resolver } from '@nestjs/graphql';
import { User } from './users.model';

@Resolver(of => User)
export class UsersResolver {


  @Query(returns => [User])
  async users() {
    return [{
      id: 10,
      email: 'test@gmail.com',
      first_name: 'first name',
      last_name: 'last name',
    }];
  }

  @Query(returns => User)
  async user() {
    return {
      id: 10,
      email: 'test@gmail.com',
      first_name: 'first name',
      last_name: 'last name',
    };
  }
}
