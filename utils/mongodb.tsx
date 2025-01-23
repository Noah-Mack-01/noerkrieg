// utils/mongodb.ts
import mongoose from "mongoose"

export default async function getDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('Please add your MongoDB URI to .env.local');
  const connection = await mongoose.connect(uri, {
  })
  mongoose.connection.on('error', err => {console.log("error", err);}); 
  return connection;
}