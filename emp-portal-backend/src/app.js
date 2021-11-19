const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorLogger = require("./utilities/ErrorLogger");
const requestLogger = require("./utilities/RequestLogger");
const userRouter = require("./routes/userRoute");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(requestLogger);

app.use("/user", userRouter);

app.use(errorLogger);

app.listen(4000);
console.log("Server listening in port 4000 ");

module.exports = app;
