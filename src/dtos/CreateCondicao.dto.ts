import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCondicaoDto {
  @Field()
  condicao: string;

  @Field()
  descricao: string;
}
