import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  margin-top: 117px;
  color: ${(props) => props.theme.colors.df};

  & > img {
    width: 667px;
    height: 667px;
    border-radius: 50%;
  }

  @media screen and (max-width: 901px) {
    margin-top: 42px;

    & > img {
      margin: 8px 0px;
      width: 245px;
      height: 245px;
    }
  }
`;

export const TextContent = styled.div`
  & > h1 {
    font: ${(props) => props.theme.fontSize.desktop.title};
  }
  & > div {
    width: 369px;
    & > p {
      font: ${(props) => props.theme.fontSize.desktop.p_largue};
      font-weight: 400;
    }
  }

  @media screen and (max-width: 901px) {
    & > h1 {
      font-size: 40px;
      padding: 10px;
    }

    & > div {
      width: 100%;
      & > p {
        font-size: 24px;
        padding: 10px;
      }
    }
  }
`;
