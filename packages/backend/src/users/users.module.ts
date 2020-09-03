import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { GraphQLModule } from '@nestjs/graphql';
import {UsersResolver} from './users.resolver'

@Module({
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
