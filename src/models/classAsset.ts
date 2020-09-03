import { Schema, Document, model } from 'mongoose';

export interface IClassAsset extends Document {
  status: boolean,
  name: string,
};

const ClassAssetSchema = new Schema(
  {
    status: { type: Boolean, required: true, default: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ClassAssetModel = model<IClassAsset>('ClassAsset', ClassAssetSchema, 'classasset');

export default ClassAssetModel;
