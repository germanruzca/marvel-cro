import styled from "styled-components";
import { mobileDevice } from "../../style/constants"


export const Background = styled.div`
  background-color: #E7C73B;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${mobileDevice}{
    height: 200px;
  }
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  @media ${mobileDevice}{
    font-size:60px;
    text-align: center;
  }
`;