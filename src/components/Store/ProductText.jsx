import React from 'react'
import { pickColor } from '../../constants/Colors';

const ProductText = ({good}) => {

  const firstLetter =  good[0].toUpperCase()
  const styles = pickColor(firstLetter)

  return (
    <div className='productText'>
      <h4 style={styles}>{good}</h4>
    </div>
  )
}

export default ProductText
