import React from 'react'

const Location = ({item}) => {
  return (
    <div className='locationClass'>
      <div className='dot'>
      </div>
      {item.location}
    </div>
  )
}

export default Location
