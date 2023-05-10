import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { VerifyToken } from "./middleware/VerifyToken.js";
import { userController } from "./controller";
// const verify = require("./middleware/VerifyToken.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.status(200).json({
    status: "Server Run successfully",
  });
  // response.sendFile(path.join(__dirname + '/login.html'));
});


// app.use(VerifyToken);
app.use("/auth", userController);

// app.post('/auth', function(request, response) {
// 	// Capture the input fields
// 	let username = request.body.username;
// 	let password = request.body.password;
// 	// Ensure the input fields exists and are not empty
// 	if (username && password) {
// 		// Execute SQL query that'll select the account from the database based on the specified username and password
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			// If there is an issue with the query, output the error
// 			if (error) throw error;
// 			// If the account exists
// 			if (results.length > 0) {
// 				// Authenticate the user
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				// Redirect to home page
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });
app.listen(PORT, () => { 
  console.log("Server is running on port " + PORT);
  // mongoose.connect("mongodb://localhost/test").then(() => {
  //   console.log("Conneted to mongoDB at port 27017");
  // });
});
