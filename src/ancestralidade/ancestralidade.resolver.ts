import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ancestralidade } from 'src/entities/ancestralidade.entity';
import AncestralidadeService from './ancestralidade.service';
import { CreateAncestralidadeDto } from 'src/dtos/CreateAncestralidade.dto';

@Resolver(() => Ancestralidade)
export class AncestralidadeResolver {
  constructor(private readonly service: AncestralidadeService) {}

  @Query(() => [Ancestralidade], { name: 'ancestralidades' })
  findAll() {
    return this.service.findAll();
  }

  @Query(() => Ancestralidade, { name: 'ancestralidade', nullable: true })
  findOne(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<Ancestralidade | null> {
    return this.service.findOneById(id);
  }

  @Mutation(() => Ancestralidade)
  addAncestralidade(
    @Args('input') ancestralidadeDto: CreateAncestralidadeDto,
  ): Promise<Ancestralidade> {
    return this.service.create(ancestralidadeDto);
  }
}
