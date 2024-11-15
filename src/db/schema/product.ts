import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    name: String,
    description: String,
    images: [String],
    price: Number,
    discount: Number,
    originalPrice: Number,
    isFeatured: Boolean,
  },
  { _id: true, timestamps: true }
);

const ProductModel =
  mongoose.models.product || mongoose.model('product', productSchema);

export { ProductModel };
