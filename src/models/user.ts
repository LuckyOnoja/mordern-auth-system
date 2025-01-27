import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  username: string;
  role: string;
}

const UserSchema = new Schema<IUser>({
  googleId: { type: String, required: true },
  username: { type: String, required: true },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
});

export default mongoose.model<IUser>('User', UserSchema);
