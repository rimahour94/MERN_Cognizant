const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      minLength: [2, 'Fullname should contain minimus 2 characters.'],
      required: [true, 'Fullname is required.'],
      validate: {
        validator: value => {
          const regEx = /^[A-Za-z]{2,50}$/
          return regEx.test(value)
        },
        message:
          'Special charaters, numbers and space are not allowed in fullname.'
      }
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      validate: {
        validator: value => {
          const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          return regEx.test(value)
        },
        message: 'Invalid email id.'
      }
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password should contain at2least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
      ]
    },
    role: {
      type: String,
      enum: ['admin', 'employee', 'student'],
      required: true,
      default: 'student'
    }
  },

  { timestamps: true }
)

userSchema.pre('save', async function () {
  try {
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
  } catch (err) {
    console.log(err.message)
  }
})

userSchema.index({ email: 1 }, { unique: true })
userSchema.index({ fullname: 'text' })
const UserModel = mongoose.model('users', userSchema)

module.exports = {
  UserModel
}
