import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Referencia } from './referencia.schema';

export type AncestralidadeDocument = Ancestralidade & Document;

@Schema({ collection: 'ancestralidades', timestamps: true })
export class Ancestralidade {
  @Prop({ unique: true, required: true })
  id: number;

  @Prop({ required: true, default: true })
  active: boolean;

  @Prop({ required: true })
  ancestralidade: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  href: string;

  @Prop({ required: true })
  explicacao: string;

  @Prop({ required: true, default: [] })
  tracos: number[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: Referencia.name }],
    default: [],
  })
  referencia: Types.ObjectId[];

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ nullable: true, default: null })
  updatedAt?: Date;
}
export const AncestralidadeSchema =
  SchemaFactory.createForClass(Ancestralidade);
