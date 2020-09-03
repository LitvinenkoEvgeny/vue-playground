import { Field, Int, ObjectType } from '@nestjs/graphql';

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
