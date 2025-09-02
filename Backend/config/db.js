import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manekapiyu:maneka2099@cluster0.scgixga.mongodb.net/OrderDelivery').then (()=> console.log("DB Connected"))
}