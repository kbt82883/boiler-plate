const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //빈칸을 지워줌
    unique: 1, //똑같은 이메일을 못 쓰게
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number, //0이면 사용자, 1이면 관리자
    default: 0, //기본값을 0으로
  },
  Image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema)

module.exports = { User}
