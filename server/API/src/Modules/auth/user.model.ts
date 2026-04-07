import mongoose, { Document, Schema } from "mongoose";
import { User } from "@velocity/shared";

export interface IUserDocument
  extends Omit<User, "id" | "createdAt" | "updatedAt">, Document {
  password: string;
}

const UserSchema = new Schema<IUserDocument>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "lead", "devs"], default: "devs" },
    avatar: { type: String, default: "" },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model<IUserDocument>("User", UserSchema);
