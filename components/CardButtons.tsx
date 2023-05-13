import * as React from 'react';
import { ProductContext } from './Card';

export const CardButtons = () => {
  
  const { counter, increaseBy } = React.useContext(ProductContext);

  return (
    <div className="card-footer">
      <div className="btn-group d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => increaseBy(-1)}
        >
          -
        </button>
        <div className="btn btn-outline-primary">{counter}</div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => increaseBy(+1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
