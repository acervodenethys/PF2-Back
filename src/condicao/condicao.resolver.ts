import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CondicaoService } from './condicao.service';
import { Condicao } from 'src/entities/condicao.entity';
import { CreateCondicaoDto } from 'src/dtos/CreateCondicao.dto';

@Resolver(() => Condicao)
export class CondicaoResolver {
  constructor(private readonly service: CondicaoService) {}

  @Query(() => [Condicao], { name: 'condicoes' })
  findAll() {
    return this.service.findAll();
  }

  @Query(() => Condicao, { name: 'condicao', nullable: true })
  findOne(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<Condicao | null> {
    return this.service.findOneById(id);
  }

  @Mutation(() => Condicao)
  addCondicao(
    @Args('input') condicaoDto: CreateCondicaoDto,
  ): Promise<Condicao> {
    return this.service.create(condicaoDto);
  }
}
