import styled from "styled-components";

export const Texts = styled.div`
  margin-left: 57px;
  & > h1 {
    color: ${(props) => props.theme.colors.df};
    font: ${(props) => props.theme.fontSize.desktop.title};
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    display: flex;
    & > h2 {
      color: ${(props) => props.theme.colors.df};
      font: ${(props) => props.theme.fontSize.desktop.subTitle};
    }

    & > img {
      width: 40px;
      margin: 0px 19px;
    }
  }

  & > button {
    border: 1px solid black;
    border-radius: 12px;
    color: white;
    width: 255px;
    height: 70px;
    font: ${(props) => props.theme.fontSize.desktop.p_largue};
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      cursor: pointer;
    }
  }
  & > button {
    border: 1px solid black;
    border-radius: 12px;
    color: white;
    width: 255px;
    height: 70px;
    font: ${(props) => props.theme.fontSize.desktop.p_largue};
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      cursor: pointer;
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  margin-top: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  & > img {
    width: 463px;
    background-color: ${(props) => props.theme.colors.bc_800};
    box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);
    border-radius: 37px;
    border: 1px solid;
  }

  @media screen and (max-width: 901px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    margin-top: 42px;
    padding: 30px;
    & > img {
      width: 100%;
    }
    ${Texts} {
      margin-left: initial;
      & > h1 {
        font-size: 40px;
      }
    }
    ${SubTitle} {
      flex-direction: column;

      & > div > h2 {
        font: ${(props) => props.theme.fontSize.mobile.subTitle};
      }
      & > button {
        margin-top: 18px;
        margin-bottom: 22px;
        width: 179px;
        height: 49px;
        font-size: 24px;
      }
    }
  }
`;
