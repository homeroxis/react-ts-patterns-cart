import * as React from 'react';
import { ImgProps } from '../interfaces/Interfaces';

export const CardImage = ({ img }:ImgProps) => {
  
  const noImage = 'https://placeimg.com/640/480/nature/grayscale';
  let imgShow = '';
  if(img){
    imgShow = img;
  } else {
    imgShow = noImage
  }

  return(
    <img
      src={ imgShow }
      className="card-img-top"
      alt="Hola Mundo!"
    />
)};
