import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CondicaoDocument = Condicao & Document;

@Schema({ collection: 'condicoes', timestamps: true })
export class Condicao {
  @Prop({ unique: true, required: true })
  id: number;

  @Prop({ required: true, default: true })
  active: boolean;

  @Prop({ required: true })
  condicao: string;

  @Prop({ required: true })
  descricao: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}
export const CondicaoSchema = SchemaFactory.createForClass(Condicao);
