import { model, Schema } from "mongoose";
import * as EmailValidator from 'email-validator';

const schema = new Schema({
    fullname: {
        type: String,
        required : true,
        trim : true,
        uppercase : true
    },
    email: {
        type: String,
        required : true,
        trim : true,
        validate:{
            validator:(value)=>{
              return EmailValidator.validate(value)
            },
            message:"Invalid email"
        }
    },
    mobile : {
        type: Number,
        required : true
    },
})

export const userSchema = model("User", schema)