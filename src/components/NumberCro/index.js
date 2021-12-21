import React from 'react';
import { Circle } from './styled';

const Component = (props) => {
  const { number } = props;
  return (
    <Circle>
      {number}
    </Circle>
  )
}

export default Component
export { Component as NumberCro}