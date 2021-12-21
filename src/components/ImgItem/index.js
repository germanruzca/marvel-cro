import React from 'react';
import { ImageItem } from './styled';

const Component = (props) => {
  const { src } = props;
  console.log(src);
  return <ImageItem url={src}/>
}

export default Component;
export { Component as ImgItem };