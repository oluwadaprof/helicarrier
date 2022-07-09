import React from 'react'
import Usercard from '../Usercard/Usercard'
import './groupeddata.scss'

const GroupedData = () => {
    return (
        <div className='grouped' >
            <Usercard />
            <Usercard />
            <Usercard />
            <Usercard />
        </div>
    )
}

export default GroupedData