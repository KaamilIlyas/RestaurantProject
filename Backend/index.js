const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const secretKey = '1234'; 

const User = require("./Models/UserSchema");
const Feedback = require("./Models/FeedbackSchema");
const Dish = require("./Models/DishSchema");
const Comment = require("./Models/CommentSchema");

let url =
  "mongodb+srv://areeb:12345@cluster0.hcn5lr8.mongodb.net/"

mongoose
  .connect(url)
  .then(() => {
    console.log("Database Connected Successfully");
  })

  .catch(() => {
    console.log("There is some error Connecting to Database");
  });


const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

app.post("/api/register", async (req, res) => {
  try {
    const user = await new User(req.body);
    const count = await User.find({});

    if (count.length == 0) {
      user.userid = 1;
    }
    
    else {
      let id = count[count.length - 1].userid + 1;
      user.userid = id;
    }

    user.save().then((response) => {
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      const token = jwt.sign({ userId: user._id }, secretKey, {
        expiresIn: '1h',
      });

      res.json({ success: true, token: token });
    } else {
      res.json({ success: false, message: 'Invalid Email or Password' });
    }
  } catch (error) {
    res.json({ success: false, message: 'An error occurred' });
  }
});
  

app.post("/api/givefeedbacks", async (req, res) => {
  try {
    const feed = await new Feedback(req.body);
    feed.save().then((response) => {
      console.log(response);
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

//It will fetch all the dishes from the database and sends them back as a response
app.get('/api/getDishes', async (req, res) => {
    try {
      const dishes = await Dish.find({}, { _id: 0 });
      res.json({ dishes: dishes });
    } catch (error) {
      res.json({ status: 'error' });
    }
  });
  
  //It will retrieves the dish details based on the dishId parameter passed in the URL 
  //If the dish is found, it is sent back as a response. Otherwise, a message indicating that the dish was not found is returned
  app.get('/api/getDish/:dishId', async (req, res) => {
    try {
      const dishId = req.params.dishId;
      const dish = await Dish.findById(dishId);
      if (dish) {
        res.json({ dish: dish });
      } else {
        res.json({ message: 'Dish not found' });
      }
    } catch (error) {
      res.json({ status: 'error' });
    }
  });

  //It will retrieve the comments associated with a specific dish based on the dishId parameter passed in the URL
  app.get('/api/getComments/:dishId', async (req, res) => {
    try {
      const dishId = req.params.dishId;
      const comments = await Comment.find({ dishId: dishId });
      res.json({ comments: comments });
    } catch (error) {
      res.json({ status: 'error' });
    }
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});