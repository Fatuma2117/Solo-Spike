require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');


///// comic book 

// router.get('/', (req, res) => {
//     axios({
//       method: 'GET',
//       url: `http://comicvine.gamespot.com/api/issues/?api_key=6527d653b13545a3a86c6c9014f2b9aee5488ab2&format=JSON
//       `
//     }).then((response) => {
//       res.send(response.data);
//     }).catch((error) => {
//       console.log('GET /get comics broke:', error);
//       res.sendStatus(500);
//     })
  
// })

// router.get('/', (req, res) => {
//     axios({
//       method: 'GET',
//       url: `http://comicvine.gamespot.com/api/characters/?api_key=6527d653b13545a3a86c6c9014f2b9aee5488ab2&sort=name&field_list=name
//       `
//     }).then((response) => {
//         console.log(response.data)
//       res.send(response.data);
//     }).catch((error) => {
//       console.log('GET /comics broke:', error);
//       res.sendStatus(500);
//     })
  
// })


// router.get('/', (req, res) => {
//     axios({
//       method: 'GET',
//       url: `http://openlibrary.org/search/authors.json?q=twain&limit=2
//       `
//     }).then((response) => {
//         console.log(response.data)
//       res.send(response.data);
//     }).catch((error) => {
//       console.log('GET /openLibrary broke:', error);
//       res.sendStatus(500);
//     })
  
// })


// router.get(`/library`, (req,res)=>{

//     axios({
//        method: 'GET',
//        url: `http://openlibrary.org/search/authors.json?q=twain&limit=3`
//     })
//     .then((response)=>{
//         console.log(response.data)
//       res.send(response.data)
//     })
//     .catch((error)=>{
//       console.log(error)
//       res.send(error)
//     })
   
//    })







module.exports = router;