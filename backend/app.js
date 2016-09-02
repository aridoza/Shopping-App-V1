const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017/ProductsAlpha';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Get home page
app.get('/', function(req, res){
  console.log("incoming GET request");
  const clothing = apparel.find().toArray(function(err, result){
    if(err){
      console.log("Error:", err);
    } else {
      res.json("Root page with all products");
    }
  })
})

//get all products
app.get('/products', function(req, res){
  console.log("GET request to get all products...");
//connect to mongodb to search for data
mongoClient.connect(mongoUrl, function(err, db) {
  const apparel = db.collection('ProductsAlpha');
  if(err) {
    console.error.bind('error regarding db with mongoclient', err);
  } else {
    //get all products
    apparel.find().toArray(function(err, result){
      if(err){
        console.log("Error with mongoClient request:", err);
      } else if(result.length){
        // console.log("result from mongoClient: ", result);
        res.json(result);
      } else {
        console.log("no products found");
        res.json("No Products Found Of That Type");
      }
      // db.close(function(){
      //   console.log("Closed the database");
      // })
    })
  }
})
})

app.listen(PORT, function(){
  console.log("Listening on port ", PORT);
})
