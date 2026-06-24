import { model, Schema } from "mongoose";

const schema = new Schema({
    fullname: String,
    email: String,
    mobile : Number,
})

export const userSchema = model("User", schema)