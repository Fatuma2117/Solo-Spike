import axios from 'axios';
import react from 'react'
import { useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'


function App(){


const [books,setBooks]=useState('');
 
 useEffect(()=>{


 })

const getBooks= () =>{
    axios({
      method: 'GET',
      url: "http://openlibrary.org/search/authors.json?q=twain&limit=3"
    }).then((response) => {
      response.
      console.log(response.data);
      setBooks([response.data]);
    })
}




  

return(

  <>
  <div>
  {/* <h1>Search</h1>
   <input onChange={(e)=>{setSearch(e.target.value)}}></input>
  <button>🔎</button> */}







  </div>

  
  
  </>
)



}

export default App;