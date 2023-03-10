import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { userController } from "./controller";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "Server Run successfully",
//   });
// });

app.use("/", userController);

app.listen(8080, () => {
  console.log("Server is running on port 8080!");
  mongoose.connect("mongodb://localhost/test").then(() => {
    console.log("Conneted to mongoDB at port 27017");
  });
});
