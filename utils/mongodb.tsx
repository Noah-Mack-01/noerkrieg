// utils/mongodb.ts
import mongoose from "mongoose"
declare global {
  var mongoose: any;
} 

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null};


export default async function getDatabase() {
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('Please add your MongoDB URI to .env.local');
  if (!cached.conn) {
    cached.promise = cached.promise ?? mongoose.connect(uri, {bufferCommands: false}).then((mongoose) => {
      return mongoose;
    });
    try { cached.conn = await cached.promise; } 
    catch (e) {
      cached.promise = null;
      throw (e);
    } 
  }
  return cached.conn;
}
