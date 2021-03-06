import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: #ee4d64;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  padding: 30px 30px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  img {
    height: 120px;
    width: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1;
      border-color: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    span {
      color: rgba(0, 0, 0, 0.8);
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#ee4d64')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
