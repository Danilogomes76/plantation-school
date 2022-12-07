import styled from "styled-components";

export const Container = styled.header`
  height: 105px;
  background-color: ${(props) => props.theme.colors.bc_800};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > img {
    width: 90px;
    margin-left: 20px;
  }

  & > ul > li {
    color: ${(props) => props.theme.colors.df};
    float: right;
    list-style: none;
    margin-right: 19px;
    margin-left: 12px;
    font: ${(props) => props.theme.fontSize.desktop.p};
  }
`;
