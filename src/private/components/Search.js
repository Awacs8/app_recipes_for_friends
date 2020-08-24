import React from 'react'

const Search = ({ handleSearch }) => {

    return (
        <div>
            <label>Pronadji recept:</label>
            <input onChange={handleSearch} />
        </div>
    )
}
export default Search