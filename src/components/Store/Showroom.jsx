import React from 'react'

const Showroom = ({children,goods}) => {
  return (
    <div
     className='showroom'
     style={goods.length <= 15 ? {overflowY: 'hidden'} : {overflowY: 'scroll'}} >
      {children}
    </div>
  )
}

export default Showroom
