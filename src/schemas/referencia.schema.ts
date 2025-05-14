import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReferenciaDocument = Referencia & Document;

@Schema({ collection: 'referencias', timestamps: true })
export class Referencia {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true, default: true })
  active: boolean;

  @Prop({ required: true })
  titulo: string;

  @Prop({ required: false, default: null })
  url?: string;

  @Prop({ required: true })
  urlPaizo: string;

  @Prop({ required: false, default: 0 })
  aventura?: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}

export const ReferenciaSchema = SchemaFactory.createForClass(Referencia);
