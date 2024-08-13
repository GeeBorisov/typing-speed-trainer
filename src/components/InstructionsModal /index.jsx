import React, { useState, useEffect } from 'react';
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter} from './InstructionsModalStyle';

const InstructionsModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Показываем модальное окно при первом рендере
    setShowModal(true);
  }, []);

  const handleOkay = () => {
    // Скрываем модальное окно, когда пользователь нажимает "Okay"
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Инструкция</ModalHeader>
            <ModalBody>
              <p>Чтобы выполнить упражнение, нажмите на текст и начните вводить текст.</p>
            </ModalBody>
            <ModalFooter>
              <button onClick={handleOkay}>Okay</button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default InstructionsModal;