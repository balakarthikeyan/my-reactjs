const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: {
        type: String
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4,
    }, 
    password: {
      type: String,
      minlength: 4,
    },   
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },    
    age: {
      type: String,
    },
    salary: {
        type: String
    }  
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
