import React from 'react'
import {StudentNumber, Location} from '../../constants/Components'

const Class = ({item}) => {

  return (
    <div className='class'>
      <div key={item.classId}>
        <h3 className='classTitle'>{item.name}</h3>
        <StudentNumber item={item}/>
        <hr className='border'/>
        {item.location === 'Online' && <Location item={item} />}
      </div>
    </div>
  )
}

export default Class
