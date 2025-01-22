import mongoose, { Schema, Document } from 'mongoose';

interface ISong extends Document {
  title: string;
  artist: string;
  artwork: string;
  url: string;
  category: Schema.Types.ObjectId; 
}

const songSchema = new Schema<ISong>({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  artwork: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category', 
  },
});

export default mongoose.model<ISong>('Song', songSchema);