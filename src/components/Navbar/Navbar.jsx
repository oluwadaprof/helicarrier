import React from 'react'
import './navbar.scss'
import SearchIcon from '@material-ui/icons/Search'

const Navbar = () => {
    return (
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search...' />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Navbar;