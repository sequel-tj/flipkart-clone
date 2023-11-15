import User from '../model/user-schema.js'
import crypto from 'crypto';


const encryptPwd = (username, password, phone) => {
    const randomizePwd = username + "|" + password + "|" + phone;
    const hashedPwd = crypto
        .createHmac('sha256', "mnbvcxz321lkjhgfdsa456poiuytrewq987")
        .update(randomizePwd.toString())
        .digest("hex");

    return hashedPwd;
}

export const userSignup = async (req, res) => {
    try {
        let user = req.body;
        user.password = encryptPwd(user.username, user.password, user.phone);

        // user exist
        const exist = await User.findOne({username: user.username})
        
        if (exist) {
            return res.status(401).json({message: "username already exist!!"});
        }

        // user not exit
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({message: user});
    }
     catch (error) {
        res.status(500).json({message: error})
     }
}

export const userLogin = async(req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({username: username});

        // console.log(user)

        if (user && user.password === encryptPwd(username, password, user.phone)) {
            return res.status(200).json({user: user, message: 'Login successful.'});
        }

        res.status(401).json({message: 'Invalid login credentials.'});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const findUser = async(req, res) => {
    try {
        const username = req.params.username;
        const exists = await User.findOne({username: username});
        
        if (exists) {
            return res.status(200).json({user: exists, message: 'user found'});
        }

        res.status(401).json({message: 'user not exits'});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}