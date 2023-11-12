import User from '../model/user-schema.js'


export const userSignup = async (req, res) => {
    try {
        const user = req.body;

        // user exist
        const exist = await User.findOne({username: user.username})
        
        if (exist) {
            return res.status(401).json({message: "user already exist!!"});
        }

        // user not exit
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({message: user});
    }
     catch (error) {
        res.status(500).json({message: error.message})
     }
}

export const userLogin = async(req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const exists = await User.findOne({username: username, password: password});
        
        if (exists) {
            return res.status(200).json({user: exists, message: 'Login successful.'});
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