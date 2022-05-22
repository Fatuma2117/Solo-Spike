

function Search({ search, searchResults }) {

    const handleSearch = (e) => {
        searchResults(e.target.value)
    }

    return (
        <>
            <div>
                <h1>Book Search 📚</h1>
                <input className='input'
                    type='text' placeholder='Enter a book name'
                    value={search}
                    onChange={handleSearch}>
                </input>
                <button >🔎</button>
            </div>
        </>
    )
}
export default Search;