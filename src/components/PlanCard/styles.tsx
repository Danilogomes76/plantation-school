import styled from "styled-components";

export const PlanFeatures = styled.div`
  margin: 23px 0px;
  & > div {
    display: flex;
    & > img {
      width: 22px;
      margin-right: 5px;
    }
    & > p {
      font: ${(props) => props.theme.fontSize.desktop.p};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bc_800};
  width: 296px;
  margin: 73px;
  box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);
  & > h1 {
    width: 100%;
    font: ${(props) => props.theme.fontSize.desktop.p_largue};
    font-size: 26px;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.comp};
    text-align: center;
    padding: 5px 0px;
  }

  & > button {
    margin-bottom: 43px;
    border: 1px solid black;
    border-radius: 12px;
    color: white;
    width: 181px;
    height: 50px;
    font: ${(props) => props.theme.fontSize.desktop.p};
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      cursor: pointer;
    }
  }

  @media screen and (max-width: 901px) {
    margin: 20px;
  }
`;
