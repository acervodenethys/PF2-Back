import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateReferenciaDto {
  @Field()
  titulo: string;

  @Field()
  url?: string;

  @Field({ nullable: true })
  urlPaizo: string;

  @Field(() => Int, { nullable: true })
  aventura?: number;
}
