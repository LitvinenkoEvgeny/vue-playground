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
  avatar: string;
}

@ObjectType()
export class CreatedUser {
  @Field(type => ID)
  id: number;

  @Field(type => String, { nullable: true })
  createdAt: string;

  @Field(type => String, { nullable: true })
  email?: string;

  @Field(type => String, { nullable: true })
  first_name?: string;

  @Field(type => String, { nullable: true })
  last_name?: string;

  @Field(type => String, { nullable: true })
  avatar?: string;
}

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  first_name?: string;

  @Field({ nullable: true })
  last_name?: string;

  @Field({ nullable: true })
  email?: string;
}
