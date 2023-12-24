import React from 'react'
import NavBar from './navBar'
import SearchBar from './searchBar'
import "../styles/pagePlayer.css"

function PagePlayer() {
    return (
        <div className='all'>
            <NavBar />
            <div className='searchBar'>
                <SearchBar />
            </div>
        </div>
    )
}

export default PagePlayer