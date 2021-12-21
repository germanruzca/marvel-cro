import styled from "styled-components";
import { mobileDevice } from "../../style/constants";

export const Circle = styled.div`
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background-color: #E7C73B;
  font-size: 25px;
  @media ${mobileDevice}{
    height: 180px;
    width: 180px;
    font-size: 60px;
  }
`;