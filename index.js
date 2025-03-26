const express = require('express');
const cors = require('cors')
const dotenv = require("dotenv");
const connection = require("./config/database");
const contactRouter = require('./routes/contactRoute');

dotenv.config();

 

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use(cors());
 
app.use("/contact",contactRouter)

app.get("/test", async (req, res) => {
    return res.status(200).send("Welcome to Granoble 🙋‍♂️");
  });
  

app.listen(PORT, async () => {
    try {
      await connection;
      console.log("MongoDB is connected.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
    console.log(`Server is running on PORT : ${PORT}`);
  });
  