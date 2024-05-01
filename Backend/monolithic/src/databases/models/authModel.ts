import mongoose, { Schema } from 'mongoose';

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      default: false,
    },
    role: {
      type: String,
      enum: ['Organizer', 'Volunteer'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', authSchema);
