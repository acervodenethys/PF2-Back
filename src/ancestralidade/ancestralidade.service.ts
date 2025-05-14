import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAncestralidadeDto } from 'src/dtos/CreateAncestralidade.dto';
import {
  Ancestralidade,
  AncestralidadeDocument,
} from 'src/schemas/ancestralidade.schema';
import { Counter, CounterDocument } from 'src/schemas/counter.schema';

@Injectable()
export default class AncestralidadeService {
  constructor(
    @InjectModel(Ancestralidade.name)
    private readonly model: Model<AncestralidadeDocument>,
    @InjectModel(Counter.name)
    private readonly counterModel: Model<CounterDocument>,
  ) {}

  private async getNextSequence(): Promise<number> {
    const result = await this.counterModel.findOneAndUpdate(
      { name: 'ancestralidade' },
      { $inc: { seq: 1 }, $setOnInsert: { name: 'ancestralidade' } },
      { new: true, upsert: true, setDefaultsOnInsert: true, strict: false },
    );
    return result.seq;
  }

  findOneById(id: number): Promise<Ancestralidade | null> {
    return this.model
      .findOne({ id: id, active: true })
      .populate('referencia')
      .exec();
  }

  findAll(): Promise<Ancestralidade[]> {
    return this.model.find({ active: true }).populate('referencia').exec();
  }

  async create(
    ancestralidade: CreateAncestralidadeDto,
  ): Promise<Ancestralidade> {
    const nextId = await this.getNextSequence();
    const newCondicao = new this.model({
      id: nextId,
      active: true,
      ...ancestralidade,
    });
    return newCondicao.save();
  }
}
