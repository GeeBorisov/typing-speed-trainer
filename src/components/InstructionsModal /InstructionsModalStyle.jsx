import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 10px;
  }
`;

export const ModalHeader = styled.h3`
  margin-top: 0;
  font-size: 24px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
  font-size: 22px;


  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 10px;
    font-size: 22px;
    padding: 6px 12px;
    background-color: #fff;
    border: 1px solid;
  }

  @media (max-width: 480px) {
    button {
      font-size: 14px;
      padding: 6px 12px;
    }
  }
`;
