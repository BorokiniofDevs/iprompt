import mongoose from "mongoose";

let isConnected = false ; //track connection status

export const connectToDb = async()=>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('MongoDb is already connected')
        return;
    }
try {
    await mongoose.connect(process.env.MONGODB_URI,{
        dbName:'iPrompt',
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    isConnected = true;
    console.log('MongoDb is connected')
    
} catch (error) {
    console.log(error)
}
}