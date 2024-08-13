import styled, {css} from 'styled-components';

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const UserInput = styled.textarea`
  cursor: pointer;
  font-size: 28px;
  padding: 1rem;
  width: 80%;
  max-width: 800px;
  height: 100%;
  background-color: transparent;
  color: transparent;
  position: absolute;
  z-index: 2;
  align-items: center;
  caret-color: #fff;
  line-height: 1.5;
  font-family: inherit;
  outline: none;
  caret-color: transparent;
  border: unset;
  resize: none;

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0.6rem;
  }

`;

export const OriginalText = styled.div`
  font-size: 28px;
  line-height: 1.5;
  z-index: 1;
  color: #999;
  padding: 1rem;
  width: 80%;
  max-width: 800px;
  height: 100%;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0.6rem;
  }
`;

export const OriginalCharacter = styled.span(
  (props) => css`
    color: ${props.isCorrect ? '#fff' : props.userInputLength > props.index ? '#ff0000' : '#999'};
  `,
);

export const Timer = styled.div`
  font-size: 32px;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 0.8rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-top: 0.6rem;
    padding: 0.6rem;
  }
`;

export const ResultsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  color: #fff;
  font-size: 24px;
  gap: 20px;
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 22px;
  }


  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;