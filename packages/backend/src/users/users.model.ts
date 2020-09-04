import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users {
  @Field(type => Int)
  page: number;

  @Field(type => Int)
  total_pages: number;

  @Field(type => [User])
  users: User[];
}

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  email: string;

  @Field(type => String)
  first_name: string;

  @Field(type => String)
  last_name: string;

  @Field(type => String)
  avatar: string
}

@ObjectType()
export class CreatedUser {
  @Field(type => String)
  name: string;

  @Field(type => String)
  job: string;

  @Field(type => ID)
  id: number;

  @Field(type => String)
  createdAt: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  job: string;
}

@InputType()
export class DeleteUserInput {
  @Field(type => ID)
  id: number;
}
