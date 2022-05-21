// import React from 'react';
// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   // Renders the entire app on the DOM
//   useEffect(() => {
//     getBooks();
//   }, [])

//   function getBooks(){
//   axios({
//     method: 'GET',
//     url: '/books'
//   }).then((response) => {
//     console.log(response.data.data);
//     setBooks([response.data.data]);
//   })}

//   const [books, setBooks] = useState([]);

//   return (
// //     <div>
// //       <header className="App-header">
// //         <h1>Random Giphy API</h1>
// //       </header>
// //       <div className="gif-area">
// //       <p>Results go here</p>
// // {/* 
// //       {theGifs.map((aGif, i) => {
// //           return <img key = {i} src={aGif.images.original.url}/>
// //         })} */}
      
// //       <br/>
// //       <button onClick={getGifs}>Get a gif!</button>
// //       </div>
      
      
// //     </div>
//   )
// }





function App (){
  return(

    <h1>Books API's</h1>
  )
}

export default App;