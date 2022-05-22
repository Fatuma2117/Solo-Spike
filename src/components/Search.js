import react from 'react'

function Search() {

    const handleSearch = (e) => {


    }

    return (
        <>
            <h1>Search</h1>
            <input type='text' placeholder='Enter a book name'
                onChange={handleSearch}></input>
            <button >🔎</button>

        </>
    )
}
export default Search;