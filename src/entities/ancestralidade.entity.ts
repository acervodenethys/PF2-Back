import { Field, ObjectType } from '@nestjs/graphql';
import { Referencia } from './referencia.entity';

@ObjectType()
export class Ancestralidade {
  @Field(() => Number)
  id: number;

  @Field({ defaultValue: true })
  active: boolean;

  @Field(() => String)
  ancestralidade: string;

  @Field(() => String)
  descricao: string;

  @Field(() => String)
  href: string;

  @Field(() => String)
  explicacao: string;

  @Field(() => [Number], { defaultValue: [] })
  tracos: number[];

  @Field(() => [Referencia], { nullable: true, defaultValue: null })
  referencia: Referencia[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true, defaultValue: null })
  updatedAt?: Date;
}
