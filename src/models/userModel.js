import mongoose, { Mongoose } from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				,
				'Please add a valid email',
			],
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
    },
    followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
		following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);


UserSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

UserSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("User", UserSchema);

export default User;
