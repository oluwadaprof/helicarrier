import React from 'react'
import Filtercard from '../components/filtercomponent/Filtercard'
import GroupedData from '../components/grouped/GroupedData'
import Navbar from '../components/Navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home' >
        <div className="nav__container">
              <Navbar />
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