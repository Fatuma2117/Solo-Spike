import axios from 'axios';
import react from 'react'
import { useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'


function App(){


const [books,setBooks]=useState([]);
 
 useEffect(()=>{
// getOpenLib();
// getComics();


 },[])

const getOpenLib= () =>{
    axios({
      method: 'GET',
      url: "http://openlibrary.org/search/authors.json?q=twain"
    }).then((response) => {
      console.log('specific name----->',response.data.docs[0].name);
      console.log('response.data ------->',response.data)
      setBooks(response.data);
      console.log('books.docs------>',books.docs)
    })


}


console.log('5 objects books------->',books.docs)
////// I have to use index to get all the objects from response
///// large object then



// const getComics= () =>{
//   axios({
//     method: 'GET',
//     url: "http://comicvine.gamespot.com/api/issues/?api_key=6527d653b13545a3a86c6c9014f2b9aee5488ab2&format=JSON&limit=2"
//   }).then((response) => {
//     JSON.stringify(response)
//     console.log(response.data);
//     setBooks([response.data]);
//   })
// }

  let array = books.docs
  console.log('testing for map',books.docs)

return(

  <>
  <div>
  <h1>Search</h1>
   <input onChange={(e)=>{setSearch(e.target.value)}}></input> 
   <button onClick={getOpenLib}>🔎</button>

{/* {JSON.stringify(books)} */}


<ul>
					{ array &&
          array.map((book, i) => {
						return ( <li key={i}>{book.name} - {book.top_work}
							</li>
						);
					})}
				</ul>


{/* {books.docs && books.docs.name }
{books.docs ? {books.docs.name}  ; <p> This didn't work! </p>} */}


  </div>

  
  
  </>
)



}

export default App;