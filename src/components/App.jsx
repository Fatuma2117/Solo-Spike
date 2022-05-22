import axios from 'axios';
import { useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'


function App(){

const dispatch = useDispatch();

const [search,setSearch]=useState([])

const books = useSelector((store)=>store.books)

const sendSearch = () =>{
   dispatch({
       type: 'GET_BOOKS',
       payload: search
   })
}


function getGifs(){
  axios({
    method: 'GET',
    url: '/books'
  }).then((response) => {
    console.log(response.data);
    // setSearch([response.data.data]);
  }).catch((error) => {
    console.log('errorrrrr opps')
  })

}
// console.log(books)

return(

  
    <div>
            <h1>Search</h1>
            <input onChange={(e)=>{setSearch(e.target.value)}}></input>
  
            <button onClick={sendSearch}>🔎</button>

            { books.items &&


books.map((book,i)=>{
  return(
      <p key={i}> {book.items.volumeInfo.title}   </p>
  
    
  )
})


}







    </div>


)
}

export default App;