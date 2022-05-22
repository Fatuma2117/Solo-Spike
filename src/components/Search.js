import react from 'react'

function Search({ search, searchResults }) {

    const handleSearch = (e) => {
        searchResults(e.target.value)

    }

    return (
        <>
            <h1>Search</h1>
            <input
                type='text' placeholder='Enter a book name'
                value={search}
                onChange={handleSearch}>
            </input>
            <button >🔎</button>

        </>
    )
}
export default Search;