import React, {useState} from 'react'
import './navbar.scss'
import SearchIcon from '@material-ui/icons/Search'

const Navbar = () => {
    const [search , setSearch] = useState();

    function handleSearch (e){
        setSearch(e.target.value)
    }
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" onChange={handleSearch}  placeholder='Search...' />
                    <SearchIcon className='icon' />
                </div>
                
            </div>
        </div>
        
    )
}

export default Navbar;