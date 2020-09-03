import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

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
  createdAt: string
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  job: string;
}
