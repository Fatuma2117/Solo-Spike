import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux'
import{useSelector} from 'react-redux'

function App (){

  const books = useSelector(store => store.books);
  const dispatch = useDispatch();


const [search,setSearch]=useState('')
const[newBooks,setNewBooks]=useState('')

const getBooks = () =>{
   dispatch({
       type: 'GET_BOOKS',
       payload: search
   })

  dispatch({
    type:'FETCH_BOOKS'
  })
}











const handleClick =() =>{
    getBooks();
   
}
  return(

   
      
    <div>
       <h1>Books API's</h1>
            <h1>Search</h1>
            <input onChange={(e)=>{setSearch(e.target.value)}}></input>
       
 
            <button onClick={handleClick}>🔎</button>

        <img>{}</img>

            
      
    </div>
  )
}

export default App;