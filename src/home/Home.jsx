import React, {useState} from 'react'
import Filtercard from '../components/filtercomponent/Filtercard'
import GroupedData from '../components/grouped/GroupedData'
import Navbar from '../components/Navbar/Navbar'
import './home.scss'
import newdata from '../data/newdata'

const Home = () => {

  const [search , setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([])

    const handleSearch = (search) =>{
        setSearch(search)
        // console.log(Object.keys(newdata), 'keys')
        // if(search !== ""){
        //   const filteredData = Object.keys(newdata).filter(value => {
        //     return Object.keys(value).join(" ").toLowerCase().includes(search.toLowerCase())
        //   })
        //   setSearchResult(filteredData)
        //   console.log(filteredData)
        // }else { 
        //   setSearchResult(newdata)
        //   console.log('new',newdata)
        // }
      // console.log(Object.keys(newdata).forEach(key  =>{
      //   console.log(`key: ${key}, value: ${newdata[key]}`)
      // }), 'keys')

      if (search !== "") {
        const filteredData = Object.keys(newdata).forEach(key => {
          console.log(`key: ${key}, value: ${newdata[key]}`)
   
        })
        // setSearchResult(filteredData)
        console.log(filteredData, "result") 
    }
  }

  return (
    <div className='home' >
        <div className="nav__container">
              <Navbar newdata={search.length > 1 ? newdata : searchResult} search={search} searchKeyword={handleSearch} />
              <div className="centered__container">
                  <Filtercard />
                  <div className="grouped__container">
                    <GroupedData/>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Home