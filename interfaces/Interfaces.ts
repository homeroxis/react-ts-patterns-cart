
export interface Product {
  id: string;
  title: string;
  img?: string; 
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
}

export interface ImgProps {
  img?: string;
}

export interface CardTitle {
  title?: string;
}

export interface onChangeArgs {
  product: Product;
  count: number
}

export interface ProductInCart extends Product {
  count: number;
}