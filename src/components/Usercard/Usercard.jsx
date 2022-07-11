import { Avatar } from '@material-ui/core'
import React from 'react'
import './usercard.scss'
import data from '../../data/data'

const Usercard = () => {
  var groups = {};

  data.forEach(function (val) {
    var date = val.time.split('T')[0];
    if (date in groups) {
      groups[date].push(val);
    } else {
      groups[date] = new Array(val);
    }
  });

  return (
    <div className='user' >
      {Object.keys(groups).map((value, index) => {
        return (
          <div key={index} >
            <h1>Date</h1>
            <div className="user__card">
              <div className="avatar"><Avatar /></div>
              <div className="content">
                <div className="username">{value.owner}</div>
                <div className="status">{value.notes}</div>
                <div className="telephone">+234-8126-01-9796</div>
              </div>
            </div>
          </div>
          )})}
        </div>


    //  <div className="user__card">
    //   <div className="avatar"><Avatar /> </div>
    //   <div className="content">
    //     <div className="username">Adeeko Tobi</div>
    //     <div className="status">Online</div>
    //     <div className="telephone">+234-8126-01-9796</div>
    //   </div>
    // </div>

    // <div className="user__card">
    //   <div className="avatar"><Avatar /> </div>
    //   <div className="content">
    //     <div className="username">Adeeko Tobi</div>
    //     <div className="status">Online</div>
    //     <div className="telephone">+234-8126-01-9796</div>
    //   </div>
    // </div>

    // <div className="user__card">
    //   <div className="avatar"><Avatar /> </div>
    //   <div className="content">
    //     <div className="username">Adeeko Tobi</div>
    //     <div className="status">Online</div>
    //     <div className="telephone">+234-8126-01-9796</div>
    //   </div>
    // </div> 

  )
}

export default Usercard
