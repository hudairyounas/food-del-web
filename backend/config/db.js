import mongoose from "mongoose";

export const connectDB = async () => {
    // await mongoose.connect("mongodb+srv://hudairyounis9:l5RSiuPJAJw7KnWD@cluster0.qmyooat.mongodb.net/food-del").then(() => console.log("DB Connected"));
    await mongoose.connect("mongodb://localhost:27017/food-del").then(() => console.log("DB Connected"));
}