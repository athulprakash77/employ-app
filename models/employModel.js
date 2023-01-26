const Mongoose=require("mongoose")


let eSchema=Mongoose.Schema(
    {
        employName:String,
        employId:String,
        employAddress:String,
        employUsername:String,
        employPassword:String
    }
)
module.exports=Mongoose.model("app",eSchema)