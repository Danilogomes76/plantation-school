import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.colors.df};

  & > h1 {
    font: ${(props) => props.theme.fontSize.desktop.title};
  }
  & > div {
    display: flex;
  }

  @media screen and (max-width: 901px) {
    & > h1 {
      font-size: 40px;
    }
  }
`;

export const PlansBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
