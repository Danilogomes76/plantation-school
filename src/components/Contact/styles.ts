import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 207px 0px;

  @media screen and (max-width: 901px) {
    margin: 60px 0px;
  }
`;

export const FormBox = styled.div`
  margin-left: 33px;
  & > h1 {
    color: ${(props) => props.theme.colors.df};
    font: ${(props) => props.theme.fontSize.desktop.title};
    font-size: 52px;
    margin-bottom: 10px;
  }
  & > form {
    display: flex;
    flex-direction: column;

    & > input {
      color: black;
      width: 188px;
      height: 32px;
      margin-bottom: 19px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid black;
      font-size: 20px;

      &:focus {
        outline: none;
      }

      &::-webkit-input-placeholder {
        font: ${(props) => props.theme.fontSize.desktop.p};
        color: black;
      }
    }
    & > textarea {
      resize: none;
      width: 188px;
      &::-webkit-input-placeholder {
        font-size: 18px;
      }
    }

    & > button {
      margin-top: 19px;
      border: 1px solid black;
      border-radius: 5px;
      color: white;
      width: 118px;
      height: 32px;
      font: ${(props) => props.theme.fontSize.desktop.p};
      font-size: 16px;
      background-color: ${(props) => props.theme.colors.primary};
      box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        cursor: pointer;
      }
    }
  }
`;

export const ContactPhoneAndEmail = styled.div`
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    & > img {
      width: 35px;
      margin-right: 10px;
    }
    & > p {
      font: ${(props) => props.theme.fontSize.desktop.p};
      font-size: 21px;
      color: ${(props) => props.theme.colors.df};
    }
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  border-radius: 15px;
  box-shadow: -17px 17px 15px rgba(0, 0, 0, 0.25);
  width: 1013px;
  padding: 30px 35px;
  background-color: ${(props) => props.theme.colors.bc_800};
  & > img {
    border: 1px solid black;
    border-radius: 15px;
    height: 344px;
    background-color: ${(props) => props.theme.colors.bc_900};
  }

  @media screen and (max-width: 901px) {
    flex-direction: column;
    width: 356px;
    padding: 20px 10px;
    margin: 20px;

    & > img {
      width: 100%;
    }

    ${FormBox} {
      margin-left: 10px;
      width: 100%;

      & > form {
        & > textarea {
          width: 80%;
        }
      }
    }

    ${ContactPhoneAndEmail} {
      width: 100%;
      margin-top: 15px;
      & > div {
        margin-left: 12px;
        & > img {
          width: 30px;
        }
        & > p {
          font-size: 17px;
        }
      }
    }
  }
`;
