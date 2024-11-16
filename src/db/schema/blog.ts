import mongoose, { Document, Model } from 'mongoose';

interface TBlogSchema {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  keywords: string[];
  tags: string[];
  isFeatured: boolean;
}

interface TBlogDocument extends TBlogSchema, Document {
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new mongoose.Schema<TBlogDocument>(
  {
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    keywords: { type: [String], required: true },
    tags: { type: [String], required: true },
    isFeatured: { type: Boolean, required: true },
  },
  { _id: true, timestamps: true }
);

const BlogModel: Model<TBlogDocument> =
  mongoose.models.blog || mongoose.model('blog', blogSchema);

export { BlogModel };
