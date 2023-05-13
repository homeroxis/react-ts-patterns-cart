import * as React from 'react';
import { useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/Interfaces';

interface useProductArgs {
  product?: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const useProducts = ({product, onChange, value = 0}:useProductArgs) => {

  const [counter, setCounter] = useState(value); 
  
  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    setCounter( newValue );

    onChange && onChange({ count: newValue, product });

  }

  React.useEffect( () => {
    setCounter(value);
  }, [ value ]);

  return {
    counter,
    increaseBy
  }
}