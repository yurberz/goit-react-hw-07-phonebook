import styled from "styled-components";

const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .loading {
    position: absolute;
    left: 10%;
    top: 0;
    color: honeydew;
    font-size: 18px;
  }

  .h1Title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 46px;
    color: honeydew;
  }

  .h2Title {
    margin-bottom: 30px;
    font-size: 32px;
    color: honeydew;
  }

  .text {
    font-size: 18px;
    font-style: italic;
    color: salmon;
  }

  .h1-appear {
    transform: translateX(-300%);
  }

  .h1-appear-active {
    transform: translateX(0);
    transition: transform 500ms linear;
  }

  .filterScale-enter {
    opacity: 0;
    transform: scale(0.1);
  }
  .filterScale-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 250ms linear;
  }
  .filterScale-exit {
    opacity: 1;
    transform: scale(1);
  }
  .filterScale-exit-active {
    opacity: 0;
    transform: scale(0.1);
    transition: all 250ms linear;
  }
`;

export default Container;
