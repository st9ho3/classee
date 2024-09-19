import React from 'react'
import { pickColor } from '../../constants/Colors';

const Product = ({children,good,chooseGoodie}) => {

  const firstLetter =  good[0].toUpperCase()
  const styles = pickColor(firstLetter)

  return (
    <div style={styles} onClick={() => chooseGoodie(good)} className='product'>
      {children}
    </div>
  )
}

export default Product
