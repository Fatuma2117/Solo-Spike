require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const booksRouter = require('./books.router.js');
const { default: axios } = require('axios');

// API_KEY = process.env.API_KEY 


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
// app.get(`/books/:search`, (req, res) => {
//     axios({
//       method: 'GET',
//       url: `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`
      
//     }).then((response) => {
//         console.log(response.data)
//       res.send(response.data);
//     }).catch((error) => {
//       console.log('GET /books broke SERVER.js:');
//       res.sendStatus(500);
//     })
  
// })

// app.get(`/`, (req, res) => {
//     axios({
//       method: 'GET',
//       url: `https://www.googleapis.com/books/v1/volumes?q=bird`
      
//     }).then((response) => {
//         console.log(response.data)
//       res.send(response.data);
//     }).catch((error) => {
//       console.log('GET /books broke SERVER.js:');
//       res.sendStatus(500);
//     })
  
// })


////// displays six books

// const options = {
//   method: 'GET',
//   url: 'https://magicblox.p.rapidapi.com/v1/book',
//   headers: {
//     'Accept-Encoding': 'gzip',
//     'X-RapidAPI-Host': 'magicblox.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f010151a61msh66accc926c221e8p1a12a0jsn507a180bd783'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });









// app.use('/get_books', booksRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});