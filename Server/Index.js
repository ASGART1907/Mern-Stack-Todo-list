const express = require("express");
const mongoose = require("mongoose");
const TodoRoutes = require("./Routes/TodoRoutes");
const app = express();
const PORT = 8080;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/todos",TodoRoutes);

mongoose.connect(process.env.MONGODB_URL)
  .then(result => app.listen(8080,() => {
    console.log("Server Success");
  }))
  .catch(err => console.log(err));

app.get("/",(req,res) => {
  res.send("Home");
})


