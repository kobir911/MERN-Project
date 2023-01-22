import mongoose from 'mongoose';
import Joi from 'joi';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;

export function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string()
      .min(5)
      .max(40)
      .required()
      .regex(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,20})(\.[a-z]{2-20})?$/),
    password: Joi.string().required().min(6).max(100),
    isAdmin: Joi.boolean(),
  });
  return schema.validate(user);
}
