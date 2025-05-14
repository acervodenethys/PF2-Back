import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReferenciaDto } from 'src/dtos/CreateReferencia.dto';
import { Counter, CounterDocument } from 'src/schemas/counter.schema';
import { Referencia, ReferenciaDocument } from 'src/schemas/referencia.schema';

@Injectable()
export class ReferenciaService {
  constructor(
    @InjectModel(Referencia.name)
    private readonly referenciaModel: Model<ReferenciaDocument>,

    @InjectModel(Counter.name)
    private readonly counterModel: Model<CounterDocument>,
  ) {}

  private async getNextSequence(): Promise<number> {
    const result = await this.counterModel
      .findOneAndUpdate(
        { name: 'referencia' },
        { $inc: { seq: 1 }, $setOnInsert: { name: 'referencia' } },
        { new: true, upsert: true, setDefaultsOnInsert: true, strict: false },
      )
      .lean();
    console.log('result', result, result.seq);
    return result.seq;
  }

  async findAll(): Promise<Referencia[]> {
    return this.referenciaModel.find({ active: true }).exec();
  }

  async findOneById(id: number): Promise<Referencia | null> {
    return this.referenciaModel.findOne({ id: id, active: true }).exec();
  }

  async create(referencia: CreateReferenciaDto): Promise<Referencia> {
    const nextId = await this.getNextSequence();
    console.log('nextId', nextId);
    return new this.referenciaModel({
      id: nextId,
      active: true,
      ...referencia,
    }).save();
  }
}
