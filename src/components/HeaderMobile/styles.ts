import styled from "styled-components";
import { push as Menu } from "react-burger-menu";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.bc_800};
  height: 80px;

  & .hamburguer {
    background-color: ${(props) => props.theme.colors.bc_800};
    display: flex;
    align-items: center;
    height: 100%;

    & > div {
      margin-left: 23px;
    }
  }
`;

export const StyledMenu = styled(Menu)`
  font-size: 19px;
  background-color: ${(props) => props.theme.colors.bc_800};
  display: flex;
  flex-direction: column;
  align-items: center;

  & .navImgBox {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
  }

  & .navTitle {
    font: ${(props) => props.theme.fontSize.mobile.subTitle};
    color: ${(props) => props.theme.colors.df};
    font-size: 44px;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 27px;
    margin-top: 13px;
  }

  &.navItemBox {
    margin-top: 27px;
  }

  & .navItem {
    margin: 10px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.df};
    font: ${(props) => props.theme.fontSize.mobile.p};
    font-size: 44px;
    & > img {
      width: 55px;
      margin-right: 10px;
    }
  }
`;
