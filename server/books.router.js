require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

// API_KEY = process.env.API_KEY

// router.get('/', (req, res) => {
//         axios({
//           method: 'GET',
//           url: `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=criticalrole
//           `
//         }).then((response) => {
//           res.send(response.data);
//         }).catch((error) => {
//           console.log('GET /get_gifs broke:', error);
//           res.sendStatus(500);
//         })
      
// })

module.exports = router;