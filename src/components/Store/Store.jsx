import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Showroom, Product, ProductText } from '../../constants/Components';
import { localStorageCall, localStorageSend } from '../../utils/LocalStorageCall';
import { capitalizeWord } from '../../utils/StringCheck';

const Store = ({ closeStore, Goods, chooseGoodie }) => {
  
  const [good, setGood] = useState('');
  const [goods, setGoods] = useState(() => localStorageCall(Goods));

  const changeGood = (e) => {
    setGood(capitalizeWord(e.target.value));
  };

  const saveGood = (e) => {
    e.preventDefault();
    setGoods([...goods, good]);
    setGood('');
  };
  const deleteProd = (id) => {
    const filteredProds = goods.filter((prod) => prod !== id)
    setGoods(filteredProds)
  }

  useEffect(() => {
    localStorageSend(Goods, goods);
  }, [goods]);

  return (
    <div className='store' onSubmit={saveGood}>
      <IoClose className='closeButton' onClick={ (e) =>{
        e.stopPropagation()
         closeStore()} } />
      <input
        type='text'
        className='storeInput'
        placeholder={`Enter ${Goods}`}
        value={good}
        onChange={changeGood}
      />
      <hr className='borderUp' />
      <Showroom goods={goods}>
        {goods.map((goodie) => (
          <Product good={goodie} chooseGoodie={chooseGoodie} value={goodie} key={goodie}>
            <IoClose className='deleteProduct' onClick={(e)=>{e.stopPropagation() 
              deleteProd(goodie)}} />
            <ProductText good={goodie} />
          </Product>
        ))}
      </Showroom>
      <button className='storeBuy' onClick={good !== '' && !goods.includes(good) ? saveGood :() => console.error('Please enter a valid value')
      }>
        Add
      </button>
    </div>
  );
};

export default Store;
