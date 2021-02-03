import styled from "styled-components";

const Div = styled.div`
  .contactList__item {
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    color: springgreen;
    font-size: 19px;
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .delBtn {
    display: flex;
    align-items: center;
    outline: none;
    border-radius: 4px;
    border-bottom: solid 1px #d6d6d6;
    min-width: 20px;
    height: 25px;
    padding: 10px;
    background-color: honeydew;
    color: black;
    font-weight: 500;
    font-size: 12px;

    &:hover {
      cursor: pointer;
    }
    &:active {
      background-color: salmon;
    }
  }

  .itemFade-enter {
    opacity: 0;
    transform: translateX(200%);
  }

  .itemFade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms linear;
  }

  .itemFade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .itemFade-exit-active {
    opacity: 0;
    transform: translateX(-200%);
    transition: all 250ms linear;
  }
`;

export default Div;
