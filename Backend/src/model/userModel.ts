import { IUser } from "../interface/interface";
import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema<IUser>({
   userid: {
      type: String,
      unique: true
   },
   email: {
      type: String,
      unique: true
   },
   name: {
      type: String
   },
   password: {
      type: String
   },
   createdAt: {
      type: String
   }
}, {
   versionKey: false
});

const User = model<IUser>("users", userSchema);
export default User;