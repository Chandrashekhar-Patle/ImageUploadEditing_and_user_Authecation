const userData = require('../models/schemaRegister')
const bcrypt = require('bcrypt')


const Home = async (req,res) => {
    try {
        await res.status(200).send("This is your task page");
    } catch (error) {
        console.log(`Home Controller : ${error}`);  
    }
}


const Register = async (req,res) => {

    try {
        console.log(req.body);
        const {username, email, phoneNo, password} = req.body;
        console.log("Registration page");

        const registerUser = await userData.findOne({email : email})

        if (!registerUser ) {
            const userCreated = new userData({
              username,
              email,
              phoneNo,
              password,
              
            });
            await userCreated.save();

            res.status(201).json({
                msg : "registered successfully", 
                token : await userCreated.generateToken(),
                userId : userCreated._id.toString(),
             })

          } else {
            res.status(400).json({ message: 'User already exists, please log in' });
          }
    } catch (error) {
        console.log(`register page error ${error}`);
        res.status(500).send({msg : "Internal server error"});   
    }
}

const Login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await userData.findOne({email});

        if (!userExist) {
            return res.status(400).json({msg : "Invalid Creditials"})
        }

        const userpassword = await bcrypt.compare(password, userExist.password);

        if (userpassword) {
            res.status(200).json({
                msg : "login successfully", 
                token : await userExist.generateToken(),
                userId : userExist._id.toString(),
             })
        }else{
            res.status(401).json({msg : "Invalid email or password creditial"})
        }

    } catch (error) {
        console.error(`Login page error : ${error}`);
        res.status(500).send({msg : "Internal server error"});
    }
}

module.exports =  { Register, Login, Home,};