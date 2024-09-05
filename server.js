const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json()); //inbuilt parser to take requested data from client to server side
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
     
})
