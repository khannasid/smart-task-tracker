import mongoose = require("mongoose");
const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      },
    } as any);

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};
export = connectDB;