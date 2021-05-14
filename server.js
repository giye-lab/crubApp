/**
 * 1. Create a simple Server
 * 2. Connects to a database via the db file
 * 3. Create a payload
 * 4. Create a Get route
5. Update route
 * 6. Delete route
 *
 */

const express = require("express");
const connectDb = require("./db/connection");
const User = require("./db/schema");

//Implement environmental variabes in .env file
require("dotenv").config();
//Port from .env
const { PORT } = process.env.PORT;

//Connect to database
connectDb();

//Initialize express
const app = express();

//Initialize the middleware
app.use(express.json({ extended: false }));
app.use(express.json());

//Create the introduction route
app.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Welcome to the crudApp where I learn to Create, Read, Update and Delete data using Nodejs",
  });
});

// Create user Get route
app.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({
        message: " GET method to get all the created data was successfull",
        data: users,
      });
    }
  });
});

//Create a Post route to save new User date
app.post("/users", (req, res) => {
  const user = req.body.user;
  User.create(
    {
      name: user.name,
      email: user.email,
      country: user.country,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json({
          message: "New user has been created successfully",
          user: newUser,
        });
      }
    }
  );
});

//Update route using the user id
app.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      country: req.body.country,
    },
    (err, user) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!user) {
        return res.status(404).json({ message: "Book not found" });
      } else {
        user.save((err, savedUser) => {
          if (err) {
            return res.status(500).json({ message: err });
          } else {
            return res.status(200).json({
              message: `User with ${req.params.id} was updated`,
            });
          }
        });
      }
    }
  );
});

// Delete route using the User id
app.delete("/users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json({ message: " User deleted" });
    }
  });
});

const port = process.env.PORT || PORT;
app.listen(port, console.log(`CRUD app running on the port ${port}`));
