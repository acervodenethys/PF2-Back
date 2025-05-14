import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAncestralidadeDto {
  @Field(() => String)
  ancestralidade: string;

  @Field(() => String)
  descricao: string;

  @Field(() => String)
  href: string;

  @Field(() => String)
  explicacao: string;

  @Field(() => [Number])
  tracos: number[];
}
