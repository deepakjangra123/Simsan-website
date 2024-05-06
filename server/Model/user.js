const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema=new Schema({
   
    fisrtName:{type:String},
    lastName:{type:String},
    email:{type:String,unique:true, required: true},
    mobile:{type:Number},
    password:{type:String, required: true},
    createdAt:{
        type:Date,
        default:Date.now
    }
})
const User = mongoose.model('User', userSchema);
module.exports=User