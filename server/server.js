require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const booksRouter = require('./books.router');
const { default: axios } = require('axios');

API_KEY = process.env.API_KEY 


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
// app.get(`/books/:search`, (req,res)=>{

//     axios({
//        method: 'GET',
//        url: `http://api.giphy.com/v1/gifs/search?q=${req.params.search}&api_key=${API_KEY}&limit=50&rating=g`
//     })
//     .then((response)=>{
//       res.send(response.data)
//     })
//     .catch((error)=>{
//       console.log(error)
//       res.send(error)
//     })
   
//    })




// const options = {
//   method: 'GET',
//   url: 'https://hapi-books.p.rapidapi.com/search/the+walking+dead',
//   headers: {
//     'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f010151a61msh66accc926c221e8p1a12a0jsn507a180bd783'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log('results from API',response.data);
//     res.send(response.data)
// }).catch(function (error) {
// 	console.error(error);
// });

// app.get(`/books/:search`, (req,res)=>{

//     axios({
//        method: 'GET',
//        url: 'https://hapi-books.p.rapidapi.com/search/the+walking+dead'
//     })
//     .then((response)=>{
//         console.log('results from API',response.data);
//       res.send(response.data)
//     })
//     .catch((error)=>{
//       console.log(error)
//       res.send(error)
//     })
   
//    })


// const options = {
//     method: 'GET',
//     url: 'https://magicblox.p.rapidapi.com/v1/book',
  
//     headers: {
//       'Accept-Encoding': 'gzip',
//       'X-RapidAPI-Host': 'magicblox.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f010151a61msh66accc926c221e8p1a12a0jsn507a180bd783'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//       response.send(response.data)
//   }).catch(function (error) {
//       console.error(error);
//   });

app.get(`/books/:search`, (req,res)=>{

const options = {
    method: 'GET',
    url: 'https://magicblox.p.rapidapi.com/v1/book',
  
    headers: {
      'Accept-Encoding': 'gzip',
      'X-RapidAPI-Host': 'magicblox.p.rapidapi.com',
      'X-RapidAPI-Key': 'f010151a61msh66accc926c221e8p1a12a0jsn507a180bd783'
    }
  } .then((response)=>{
      console.log(response.data)
      res.send(response.data)
    })
    .catch((error)=>{
      console.log(error)
      res.send(error)
    })
   
   })


app.use('/books', booksRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});