import UserModel from '../models/userModel.js';

export const createUser = async(req,res)=>{
    try {
        const data = req.body
        console.log(data)
        const password = await UserModel.encryptPassword(data.password)
        const user = new UserModel(data)
        user.password = password
        await user.save()
        res.status(200).json({message:'User created successfully', user});
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"unable to register user",error:error});
    }
}

export const getUsers = async(req,res)=>{
    try {
        const usersFound = await UserModel.find()
        if(!usersFound){
            res.status(200).json({message:"Users empty",usersFound});
        }
        res.status(200).json({message:"Users found",usersFound});

    } catch (error) {
        res.status(500).json({message:"unable to get users",error});
    }
}

export const getUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const userFound = await UserModel.findById(id);
        if(!userFound){
            res.status(200).json({message:"User not found",userFound});
        }
        res.status(200).json({message:"User found",userFound});
    } catch (error) {
        res.status(500).json({message:"unable to get user",error});
    }
}

export const updateUser = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedUser = await UserModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'User updated successfully', updatedUser});

    } catch (error) {
        res.status(500).json({message:"unable to update user",error});
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedUser = await UserModel.findByIdAndDelete(id)
        res.status(200).json({message:'User deleted successfully', deletedUser});
    } catch (error) {
        res.status(500).json({message:"unable to delete user",error});
    }
}

