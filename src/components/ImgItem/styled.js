import styled from "styled-components";


export const ImageItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center center;
`;