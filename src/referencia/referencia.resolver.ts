import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReferenciaService } from './referencia.service';
import { Referencia } from 'src/entities/referencia.entity';
import { CreateReferenciaDto } from 'src/dtos/CreateReferencia.dto';

@Resolver(() => Referencia)
export class ReferenciaResolver {
  constructor(private readonly referenciaService: ReferenciaService) {}

  @Query(() => [Referencia], { name: 'referencias' })
  findAll() {
    return this.referenciaService.findAll();
  }

  @Query(() => Referencia, { name: 'referencia', nullable: true })
  async findOneById(id: number): Promise<Referencia | null> {
    return this.referenciaService.findOneById(id);
  }

  @Mutation(() => Referencia)
  addReferencia(
    @Args('input') createReferenciaDto: CreateReferenciaDto,
  ): Promise<Referencia> {
    return this.referenciaService.create(createReferenciaDto);
  }
}
