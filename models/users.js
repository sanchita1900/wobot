const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        firstname:{
            type: String,
            required: true,
        },
        lastname:{
            type: String,
        },
        password:{
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model("user", userSchema);