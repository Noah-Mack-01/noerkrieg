// utils/mongodb.ts
import { MongoClient, MongoClientOptions } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

const uri = process.env.MONGODB_URI
const options: MongoClientOptions = {
  maxPoolSize: 10,
  minPoolSize: 5,
}

// Global object to store the MongoDB client instance
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  const client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise
export default clientPromise

// Helper function to get database instance
export async function getDatabase(dbName: string) {
  const client = await clientPromise
  return client.db(dbName)
}

// Helper function to get collection
export async function getCollection(dbName: string, collectionName: string) {
  const db = await getDatabase(dbName)
  return db.collection(collectionName)
}