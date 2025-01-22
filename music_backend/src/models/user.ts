import mongoose from 'mongoose'

export enum ISignUpMethod {
  Local = 'local',
  Google = 'google',
  Facebook = 'facebook',
}
interface IUser {
  password?: string
  googleId?: string
  facebookId?: string
  name: string
  email: string
  signupMethod: ISignUpMethod
}

const userSchema = new mongoose.Schema<IUser>({
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  signupMethod: {
    type: String,
    enum: Object.values(ISignUpMethod),
    default: ISignUpMethod.Local,
    required: true,
  },
})

const User = mongoose.model<IUser>('User', userSchema)

export default User
