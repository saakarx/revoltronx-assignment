import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const MONGODB_URI: string = process.env.MONGODB_URI || '';
const connection: ConnectionObject = {};

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: MONGODB_URI');
}

export async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log('Connection already persists');
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
    console.log('DB connection success');
  } catch (error) {
    console.log('DB connection failed:', error);
    process.exit();
  }
}
