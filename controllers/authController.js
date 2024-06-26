import userModel from "../models/userModel";

export const registerController = async (req, res) => {
    try{
        const {name, email, password, phone, address} = req.body
        //validation
        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'email is required'})
        }
        if(!password){
            return res.send({error:'password is required'})
        }
        if(!phone){
            return res.send({error:'phone is required'})
        }
        if(!address){
            return res.send({error:'address is required'})
        }
        //check user
        const exsistingUser = await userModel.findOne({email})
        //existing user
        if(exsistingUser){
            return res.status(200).send({
                success:true,
                message: 'Already Registered'
            })
        }
        //register user
        
    } catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in registeration',
            error
        })
    }
};
