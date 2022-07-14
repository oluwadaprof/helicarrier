import React, {useRef} from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = (props) => {
    // console.log(props)
    const inputRef = useRef(" ");

    const getSearchValue = ()=>{
        props.searchKeyword(inputRef.current.value)
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input ref={inputRef} type="text"  placeholder='Search...' value={props.search} onChange={getSearchValue} />
                    <SearchIcon className='icon' />
                </div>
                
            </div>
        </div>
        
    )
}

export default Navbar;