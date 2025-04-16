const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique : true,
        trim : true,
    },

    email : {
        type: String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
    },

    phoneNo : {
        type: String,
        required : true,

    },

    password : {
        type: String,
        required : true,

    }
})

registerSchema.pre("save", async function(next){
    // console.log("pre method",this);
const user = this;

if (!user.isModified("password")) {
    next();
}

try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(this.password, saltRound);
    user.password = hash_password;
} catch (error) {
    next(error);
}
})

registerSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
        }, 
        process.env.JWT_SECRET_KEY,
        {
            expiresIn : "10d",
        }
    );
    } catch (error) {
        console.error(error);
        
    }
}

const userData = new mongoose.model('userData', registerSchema);

module.exports = userData;