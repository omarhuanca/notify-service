import { Schema, Document, model } from 'mongoose';

export interface ITopic extends Document {
  status: boolean,
  name: string,
  classAsset: string,
};

const TopicSchema = new Schema(
  {
    status: { type: Boolean, required: true, default: true },
    name: { type: String, required: true },
    classAsset: { type: Schema.Types.ObjectId, ref: 'ClassAsset', required: true },
  },
  {
    timestamps: true,
  }
);

const TopicModel = model<ITopic>('Topic', TopicSchema, 'topic');

export default TopicModel;
