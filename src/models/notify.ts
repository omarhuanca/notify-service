import { Schema, Document, model } from 'mongoose';

export interface INotify extends Document {
  status: boolean,
  title: string,
  content: string,
  classAsset: string,
};

const NotifySchema = new Schema(
  {
    status: { type: Boolean, required: true, default: true },
    title: { type: String, required: true },
    content: {type: String, required: true },
    classAsset: { type: Schema.Types.ObjectId, ref: 'ClassAsset', required: true },
  },
  {
    timestamps: true,
  }
);

const NotifyModel = model<INotify>('Notify', NotifySchema, 'notify');

export default NotifyModel;
