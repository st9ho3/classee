import React from 'react'

const Showroom = ({children,goods, type}) => {
  return (
    <div
     className={type === 'bigger' ? 'showroom bigger' : 'showroom'}
     style={type === 'bigger' ? goods.length <= 12 ? {overflowY: 'hidden'} : {overflowY: 'scroll'}: goods.length <= 15 ? {overflowY: 'hidden'} : {overflow: 'scroll'}} >
      {children}
    </div>
  )
}

export default Showroom
