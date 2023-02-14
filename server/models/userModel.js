import { mongoose, Schema } from "mongoose";

// Need to update this. We will authenticate using Firebase.
const userSchema = new Schema({
  hashedPassword: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
