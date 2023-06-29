import {Schema, model} from "mongoose"
import bycrypt from "bcrypt"

const UserSchema = new Schema(
    {
    name: {
      type: String,
      required: [true, "Your username is required"],
    },
    email: {
      type: String,
      required: [true, "Your email is required"],
      unique : true
    },
    lastname: {
      type: String,
      required: [true, "Your lastname is required"]
    },
    telephone: {
      type: Number,
      required: [true, "Your number is required"]
    },
    password: {
      type: String,
      required: [true, "Your password is required"]
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  }
)


UserSchema.pre("save", async function(){
  this.password = await bycrypt.hash(this.password,12)
})


 export default model('Users', UserSchema)