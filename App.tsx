import * as React from 'react';
import { useState } from 'react';
import { Card } from './components/Card';
import { CardBody } from './components/CardBody';
import { CardButtons } from './components/CardButtons';
import { CardImage } from './components/CardImage';
import { Product, ProductInCart } from './interfaces/Interfaces';

const product1: Product = {
  id: '1',
  title: 'Iphone 14',
  img: 'https://placeimg.com/640/480/tech',
};

const product2: Product = {
  id: '2',
  title: 'Ipad Pro',
  img: 'https://placeimg.com/640/480/people',
};

const products: Product[] = [product1, product2];

export const App = () => {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log({ count, product });
    setShopingCart((oldShopingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShopingCart;
        return rest;
      }
      return {
        ...oldShopingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div className="container">
      {/* <div className="row">
        <div className="col">
          <small>{JSON.stringify(shopingInCart)}</small>
        </div>
      </div> */}
      <div className="row mt-5">
        <div className="col">
          {products.map((product) => (
            <Card
              product={product}
              onChange={onProductCountChange}
              style={{ maxWidth: '250px' }}
              value={ shopingCart[product.id]?.count || 0 }
            >
              <CardImage img={product.img} />
              <CardBody title={product.title} />
              <CardButtons />
            </Card>
          ))}
        </div>
        <div style={{ position: 'fixed', top: '0', right: '0', maxWidth: '150px' }}>
          {Object.keys(shopingCart).map((key) => {
            const product = shopingCart[key];
            return (
              <Card
                product={product}
                onChange={onProductCountChange}
                style={{ maxWidth: '200px' }}
                value={ product.count }
              >
                <CardImage img={product.img} />
                <CardButtons />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
