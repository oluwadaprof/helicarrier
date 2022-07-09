import React from 'react'
import './filtercard.scss'

const Filtercard = () => {
  return (
    <div className='filter' >
        <div className="filterbutton">
            <button className='active' >Active</button>
        </div>
          <div className="filterbutton">
              <button className='pending'>Pending</button>
          </div>
          <div className="filterbutton">
              <button className='approved' >Approved</button>
          </div>
          <div className="filterbutton">
              <button className='declined'>Declined</button>
          </div>
    </div>
  )
}

export default Filtercard;