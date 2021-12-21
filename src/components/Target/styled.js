import styled from "styled-components";
import { mobileDevice } from "../../style/constants";

export const MainContainer = styled.div`
  height: 350px;
  width:580px;
  border: 1px solid #cce;
  padding: 25px;
  box-sizing: border-box;
  border-radius:20px;
  display: flex;
  margin: 30px 0;
  background-color: #fff;
  @media ${mobileDevice}{
    border-radius:50px;
    height: 1500px;
    width: 900px;
    flex-direction: column;
  }
`;


export const ImageContainer = styled.div`
  min-width: 200px;
  height: 100%;
  @media ${mobileDevice}{
    height: 60%;
    width: 700px;
    align-self: center;
    margin-bottom: 40px;
  }
`;

export const Text = styled.div`
  margin-left: 30px;
  @media ${mobileDevice}{
    margin: 50px
  }
`;
export const Title = styled.div`
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size:20px;
  font-weight:bold;
  @media ${mobileDevice}{
    font-size:50px;
    text-align: center;
  }
`;

export const Year = styled.div`
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size:15px;
  font-weight:bold;
  margin: 20px 0;
  @media ${mobileDevice}{
    font-size:30px;
    text-align: center;
  }
`

export const Synopsis = styled.div`
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size:15px;
  font-weight:bold;
  @media ${mobileDevice}{
    font-size:40px;
    text-align: center;
  }
`;

export const TextSy = styled.p`
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size:15px;
  font-weight:regular;
  text-align:justify;
  @media ${mobileDevice}{
    font-size:30px;
  }
`;


export const Ranking = styled.div`
  position: absolute;
  margin-top:270px;
  margin-left:500px;
  @media ${mobileDevice}{
    margin-top:720px;
    margin-left:350px;
  }
`;