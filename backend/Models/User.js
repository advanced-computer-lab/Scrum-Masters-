const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function isUser(type){
    return type!="admin";
}


const userSchema=new Schema({

firstName: {
    type: String,
    required:isUser(this.type)
  }, 

  lastName: {
    type: String,
    required:isUser(this.type)
  },
  homeAddress: {
    type: String,
    required:isUser(this.type)

  },  
  email: {
    type: String,
    required:isUser(this.type)
  },
  countryCode: {
    type: Number,
    required:isUser(this.type)
},
  phoneNumber: {
    type: Array,
    required:isUser(this.type)

  },
  passportNumber: {
    type: Number,
    required:isUser(this.type)
  },

  type: {
      type:String,
      required:true
  }
  //password SPRINT 3
});

const User = mongoose.model('User', userSchema);
module.exports = User;
