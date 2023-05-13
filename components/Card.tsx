import * as React from 'react';
import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/Interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const Card = ({ product, className, style, children, onChange, value }:Props) => {

  const { increaseBy, counter } = useProducts({ product, onChange, value });

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}
    >
      <div 
        className={`card ${className}`}
        style={ style }
      >{children}</div>
    </Provider>
  )
}
;
