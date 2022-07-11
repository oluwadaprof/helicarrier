// import { Avatar } from '@material-ui/core'
import React from 'react'
import './usercard.scss'
// import data from '../../data/data'
import newdata from '../../data/newdata'



const Usercard = () => {
  return (
    <div className="user">
      {Object.keys(newdata).map((value, index) => {
        const itemsForTheDate = newdata[value];
        return (
          <div key={index}>
            <h1>Date: {value}</h1>
            {itemsForTheDate.map((item, index) => (
              <div className="user__card" key={index}>
                <div className="content">
                  <div className="username">{item.owner}</div>
                  <div className="status">{item.notes}</div>
                  <div className="status">{item.players}</div>
                  <div className="status">{item.sport}</div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );

}
export default Usercard;