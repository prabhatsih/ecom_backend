const user = require('../model/user.model')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const signup = async (req, res) => {
    try {
        const { Email, Password } = req.body
        console.log(Email)
        if (!Email || !Password) {
            return res.status(402).json({
                sucess: false,
                msg: "Please Fill All  Required Fields"
            })
        }

        //check user
        const UserExist = await user.find({ Email })
        // console.log(UserExist)
        if (!UserExist) {
            return res.status(402).json({
                sucess: false,
                msg: "User Already Exist With this Email"
            })
        }

        const NewUser = new user({
            Email,
            Password
        })
        await NewUser.save()
        res.status(201).json({
            sucess: true,
            msg: "Registration Successfull"
        })
    } catch (error) {
        res.status(501).json({
            sucess: false,
            data: error,
            msg: "Registration Failed"
        })
    }
}

const login = async (req, res) => {
    try {
        const { Email, Password } = req.body
        if (!Email || !Password) {
            return res.status(402).json({
                sucess: false,
                msg: "Please Fill All  Required Fields"
            })
        }

        //check user
        const UserExist = await user.findOne({ Email })
        console.log(UserExist)
        if (!UserExist) {
            return res.status(401).json({
                sucess: false,
                msg: "Not a Valid User"
            })
        }

        const PasswordMatch = await UserExist.comparePassword(Password) 

        if (!PasswordMatch) {
            return res.status(401).json({
                sucess: false,
                msg: "Invalid Password"
            })
        }
        //send token

        const token = JWT.sign({ id: user._id }, "qawsdeweccfewfcsdewf", {
            expiresIn: '2d'
        });

        // Set cookie options
        const option = {
            httpOnly: true,
            secure: false
        };
        res.status(201).cookie('token', token, option).json({
            success: true,
            token,
            data: UserExist
        });

    } catch (error) {
        res.status(501).json({
            success: false,
            data: error
        });
        console.log(error)
    }
}


module.exports = {
    login,
    signup
}