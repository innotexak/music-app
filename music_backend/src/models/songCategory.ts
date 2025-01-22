import mongoose from 'mongoose';

interface ICategory {
  name: string;
  description: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ICategory>('Category', categorySchema);