import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    slug: String,
    excerpt: String,
    title: String,
    content: String,
    image: String,
    keywords: [String],
    tags: [String],
  },
  { _id: true, timestamps: true }
);

const BlogModel = mongoose.models.blog || mongoose.model('blog', blogSchema);

export { BlogModel };
