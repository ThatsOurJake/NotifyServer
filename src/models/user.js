import { Schema, model } from 'mongoose';

const deviceSchema = new Schema({
  name: {
    type: String
  },
  token: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  devices: [deviceSchema]
});

export default model('users', userSchema, 'users')