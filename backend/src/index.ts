import Express = require('express');
import cors = require('cors');
const dotenv = require('dotenv');
import connectDB = require('./config/db');

dotenv.config();
connectDB();


const app = Express();
app.use(cors());
app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});