const mongoose = require("mongoose");

// youtubeBackend

mongoose
  .connect('mongodb+srv://dhruvagrawal13021307:6R5V7mwqXAHifdRR@cluster0.jyhztzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB connection successful!')).catch(err=>{
    console.log(err)
  });

  //Remaining code
  

// mongoose