import Express = require("express");
import cors = require("cors");
import dotenv = require("dotenv");
import connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = Express();
app.use(cors());
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));