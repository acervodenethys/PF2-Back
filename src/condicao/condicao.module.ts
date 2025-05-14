import { Module } from '@nestjs/common';
import { CondicaoService } from './condicao.service';
import { CondicaoResolver } from './condicao.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Condicao, CondicaoSchema } from 'src/schemas/condicao.schema';
import { Counter, CounterSchema } from 'src/schemas/counter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Condicao.name, schema: CondicaoSchema },
      { name: Counter.name, schema: CounterSchema },
    ]),
  ],
  providers: [CondicaoService, CondicaoResolver],
})
export class CondicaoModule {}
