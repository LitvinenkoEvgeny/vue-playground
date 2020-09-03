import { Resolver, Args, Mutation, Int, Context } from '@nestjs/graphql';

import { Token, LoginInput } from './auth.model';
import { AuthService } from './auth.service';

@Resolver(of => Token)
export class AuthResolver {

  constructor(private authService: AuthService) {
  }

  @Mutation(returns => Token)
  async login(@Args('userData') userData: LoginInput) {
    return this.authService.login(userData);
  }
}
