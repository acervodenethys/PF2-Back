import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Condicao {
  @Field(() => Number)
  id: number;

  @Field(() => Boolean, { defaultValue: true })
  active: boolean;

  @Field(() => String)
  condicao: string;

  @Field(() => String)
  descricao: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true, defaultValue: null })
  updatedAt?: Date;
}
