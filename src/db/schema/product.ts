import mongoose, { Document, Model } from 'mongoose';

interface IProductSchema {
  images: string[];
  name: string;
  description: string;
  price: number;
  discount: number;
  isFeatured: boolean;
}

interface IProductDocument extends IProductSchema, Document {
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProductDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    isFeatured: { type: Boolean, required: true },
  },
  { _id: true, timestamps: true }
);

const ProductModel: Model<IProductDocument> =
  mongoose.models.product || mongoose.model('product', productSchema);

export { ProductModel };
