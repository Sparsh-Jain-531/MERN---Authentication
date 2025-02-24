import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const {token} = req.cookies;

    if(!token) {
        return res.json({
            status: false,
            message: "You are not logged In!"
        })
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(!tokenDecode.id) {
          return res.json({
            status: false,
            message: "You are not logged In!"
          })
        }

        req.body.userId = tokenDecode.id;
        next();

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
    
}

export default userAuth;