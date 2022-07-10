import { Avatar } from '@material-ui/core'
import React from 'react'
import './usercard.scss'
import data from '../../data/data'

const Usercard = () => {
 

  return (
     <div className='user' >
      <h1>Date</h1>
      <div className="user__card">
        <div className="avatar"><Avatar/> </div>
        <div className="content">
          <div className="username">Adeeko Tobiloba</div>
          <div className="status">Online</div>
          <div className="telephone">+234-8126-01-9796</div>
        </div>
      </div>

      {/* <div className="user__card">
        <div className="avatar"><Avatar /> </div>
        <div className="content">
          <div className="username">Adeeko Tobi</div>
          <div className="status">Online</div>
          <div className="telephone">+234-8126-01-9796</div>
        </div>
      </div>


      <div className="user__card">
        <div className="avatar"><Avatar /> </div>
        <div className="content">
          <div className="username">Adeeko Tobi</div>
          <div className="status">Online</div>
          <div className="telephone">+234-8126-01-9796</div>
        </div>
      </div>

      <div className="user__card">
        <div className="avatar"><Avatar /> </div>
        <div className="content">
          <div className="username">Adeeko Tobi</div>
          <div className="status">Online</div>
          <div className="telephone">+234-8126-01-9796</div>
        </div>
      </div> */}

    </div>
  )
}

export default Usercard
