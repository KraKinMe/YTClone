var express = require("express");
var app = express();
var port = 4000
const cookieParser = require('cookie-parser');
const cors = require('cors');
// cors to send data from backend to frontend or vice versa

const mongoose = require('mongoose');
const path = require('path');

app.use(cors({
    origin: 'http://localhost:3000', // React App URL mai jo use kar raha hoon
    credentials: true
  }))

app.use(express.json());
app.use(cookieParser());
require('./Connection/conn');

// to connect to the database(MongoDB) and create a database called youtubeBackend

//Routes to handle the requests

const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

app.use('/auth',AuthRoutes);
app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);


app.listen(port,()=>{console.log("Our backend project is running on Port 4000")}); // Backend server