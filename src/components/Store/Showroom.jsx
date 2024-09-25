import React from 'react'

const Showroom = ({children,goods, type}) => {
  return (
    <div
     className={type === 'bigger' ? 'showroom bigger' : 'showroom'}
     style={goods.length <= 15 ? {overflowY: 'hidden'} : {overflowY: 'scroll'}} >
      {children}
    </div>
  )
}

export default Showroom
