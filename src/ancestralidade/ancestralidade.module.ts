import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Ancestralidade,
  AncestralidadeSchema,
} from 'src/schemas/ancestralidade.schema';
import { Counter, CounterSchema } from 'src/schemas/counter.schema';
import { AncestralidadeResolver } from './ancestralidade.resolver';
import AncestralidadeService from './ancestralidade.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ancestralidade.name, schema: AncestralidadeSchema },
      { name: Counter.name, schema: CounterSchema },
    ]),
  ],
  providers: [AncestralidadeService, AncestralidadeResolver],
})
export class AncestralidadeModule {}
