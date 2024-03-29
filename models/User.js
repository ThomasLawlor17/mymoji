const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  },
  downloads: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true,
  // Even though it's hashed - don't send password to clients
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // Update the password property with the hash
    user.password = hash;
    return next();
  });
});


// userSchema.methods.addDL = async function () {
//   const user = this
//   console.log(user)
//   user.downloads += 1
//   console.log(user)
//   return user.save()
// }

module.exports = mongoose.model('User', userSchema);