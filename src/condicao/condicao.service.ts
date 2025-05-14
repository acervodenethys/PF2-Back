import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Condicao, CondicaoDocument } from 'src/schemas/condicao.schema';
import { Counter, CounterDocument } from 'src/schemas/counter.schema';
import { Model } from 'mongoose';
import { CreateCondicaoDto } from 'src/dtos/CreateCondicao.dto';

@Injectable()
export class CondicaoService {
  constructor(
    @InjectModel(Condicao.name)
    private readonly condicaoModel: Model<CondicaoDocument>,
    @InjectModel(Counter.name)
    private readonly counterModel: Model<CounterDocument>,
  ) {}

  private async getNextSequence(): Promise<number> {
    const result = await this.counterModel.findOneAndUpdate(
      { name: 'condicao' },
      { $inc: { seq: 1 }, $setOnInsert: { name: 'condicao' } },
      { new: true, upsert: true, setDefaultsOnInsert: true, strict: false },
    );
    return result.seq;
  }

  async findOneById(id: number): Promise<Condicao | null> {
    return this.condicaoModel.findOne({ id: id, active: true }).exec();
  }

  async findAll(): Promise<Condicao[]> {
    return this.condicaoModel.find({ active: true }).exec();
  }

  async create(condicaoDto: CreateCondicaoDto): Promise<Condicao> {
    const nextId = await this.getNextSequence();
    const newCondicao = new this.condicaoModel({
      id: nextId,
      active: true,
      ...condicaoDto,
    });
    return newCondicao.save();
  }
}
