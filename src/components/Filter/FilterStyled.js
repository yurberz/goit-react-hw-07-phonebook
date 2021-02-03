import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: honeydew;
  font-size: 22px;
  font-weight: 700;

  .input {
    margin-top: 20px;
    padding: 10px;
    width: 250px;
    height: 35px;
    color: black;
    font-size: 16px;
    font-style: italic;
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

export default Label;
