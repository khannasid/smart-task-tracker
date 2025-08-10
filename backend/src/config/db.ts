import mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
    await mongoose.connect(dbURI, {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      },
    } as any);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export = connectDB;