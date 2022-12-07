import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 901px) {
    display: none;
  }
`;

export const BoxImage = styled.div`
  border-radius: 15px;
  width: 252px;
  height: 127px;
  background-color: ${(props) => props.theme.colors.bc_800};
  box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 49px 0px 49px;

  & > img {
    width: 90px;
  }
`;
