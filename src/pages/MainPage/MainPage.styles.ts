import styled from "styled-components/macro";

export const CatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 25px;
  margin-bottom: 10px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1080px) {
    padding: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
export const CatWrapper = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 3px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
