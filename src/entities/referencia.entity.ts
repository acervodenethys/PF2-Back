import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Referencia {
  @Field(() => Number)
  id: number;

  @Field(() => Boolean, { defaultValue: true })
  active: boolean;

  @Field(() => String)
  titulo: string;

  @Field(() => String, { nullable: true, defaultValue: null })
  url?: string;

  @Field(() => String)
  urlPaizo: string;

  @Field({ nullable: true, defaultValue: null })
  aventura?: number;

  @Field()
  createdAt: Date;

  @Field({ nullable: true, defaultValue: null })
  updatedAt?: Date;
}
