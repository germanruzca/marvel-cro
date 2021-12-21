import React from 'react';
import { MainContainer, ImageContainer, Title,Text,Year,Synopsis, TextSy,Ranking } from "./styled"
import { NumberCro} from "../NumberCro"
import { ImgItem } from "../ImgItem"

const Component = (props) => {
  const { movie } = props;
  const { image, title, year, sipnosis,id_cro } = movie;
  return (
    <MainContainer>
      <ImageContainer>
        <ImgItem src={image} />
      </ImageContainer>
      <Text>
        <Title>{title}</Title>
        <Year>Year: {year}</Year>
        <Synopsis>Synopsis</Synopsis>
        <TextSy>{sipnosis}</TextSy>
      </Text>
      <Ranking>
        <NumberCro number={id_cro}/>
      </Ranking>
    </MainContainer>
  )
}

export default Component
export {Component as Target}