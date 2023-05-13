import * as React from 'react';
import { CardTitle } from '../interfaces/Interfaces';

export const CardBody = ({ title }:CardTitle) => {

  return (
    <div className="card-body">
      <h5 className="card-title">{ title }</h5>
    </div>
  );
};
