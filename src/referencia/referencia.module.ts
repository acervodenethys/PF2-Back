import { Module } from '@nestjs/common';
import { ReferenciaService } from './referencia.service';
import { ReferenciaResolver } from './referencia.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Referencia, ReferenciaSchema } from 'src/schemas/referencia.schema';
import { Counter, CounterSchema } from 'src/schemas/counter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Referencia.name, schema: ReferenciaSchema },
      { name: Counter.name, schema: CounterSchema },
    ]),
  ],
  providers: [ReferenciaService, ReferenciaResolver],
})
export class ReferenciaModule {}
