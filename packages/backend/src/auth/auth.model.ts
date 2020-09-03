import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Token {
  @Field(type => String)
  token;
}

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
