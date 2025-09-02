import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) =>{

    const {token} = req.header;
    if(!token){
        returnres.json({success:false , message:"Not Authorized Login Again"})
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    }catch (error){
    console.log(error);
    res.json({ success: false, message: "Error" })

    }
}

export default authMiddleware;