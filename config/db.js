import mongoose from "mongoose";

const db =mongoose.connect('mongodb://localhost:27017/HotelAPI')
.then(()=>{
    console.log("connected...");
})
.catch((err)=>{
    console.log("error...",err);
})

export default db;