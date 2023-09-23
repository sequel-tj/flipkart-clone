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