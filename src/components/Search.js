

function Search({ search, searchResults }) {

    const handleSearch = (e) => {
        searchResults(e.target.value)

    }

    return (
        <>
            <h1>Book Search 📚</h1>
            <input className='input'
                type='text' placeholder='Enter a book name'
                value={search}
                onChange={handleSearch}>
            </input>
            <button >🔎</button>

        </>
    )
}
export default Search;