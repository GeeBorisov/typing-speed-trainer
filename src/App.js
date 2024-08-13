import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import InstructionsModal from './components/InstructionsModal ';
import ResultsScreen from './components/ResultsScreen';
import {
  setText,
  setUserInput,
  setStartTime,
  setWpm,
  setErrors,
  setShowResults,
  setTimeLeft,
  resetState,
} from './redux/slices/textInputSlice';
import { getRandomText, TEXT_ARRAY, countErrors } from './assets/utils';

const AppWrapper = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  height: 100vh;
  background-color: #3b3636;
`;

const App = () => {
  // Извлечение необходимых состояний из Redux store
  const { text, userInput, timeLeft, showResults, wpm, errors, elapsedTime } = useSelector(
    (state) => state.textInput,
  );
  const dispatch = useDispatch();

  // При первом рендере компонента, получаем случайный текст и устанавливаем таймер на 30 секунд
  useEffect(() => {
    dispatch(setText(getRandomText(TEXT_ARRAY)));
    dispatch(setTimeLeft(30));
  }, [dispatch]);

  // Обработка ввода пользователя
  const handleTextInput = (input) => {
    dispatch(setUserInput(input));

    // Если пользователь начал вводить текст, то устанавливаем время начала
    if (userInput.length === 0) {
      dispatch(setStartTime(Date.now()));
    }

    // Подсчитываем ошибки в введенном тексте
    const currentErrors = countErrors(text, input);
    dispatch(setErrors(currentErrors));

    // Если пользователь ввел весь текст правильно, то показываем результаты
    if (input === text) {
      dispatch(setShowResults(true));
      // Вычисляем скорость печати (WPM)
      const wpmValue = Math.round((text.split(' ').length * 60000) / elapsedTime);
      dispatch(setWpm(wpmValue));
      // Сбрасываем состояние
      dispatch(resetState());
      // Получаем новый случайный текст и устанавливаем таймер на 30 секунд
      dispatch(setText(getRandomText(TEXT_ARRAY)));
      dispatch(setTimeLeft(30));
    }
  };

  // Обработка перезапуска упражнения
  const handleRestart = () => {
    dispatch(resetState());
    dispatch(setText(getRandomText(TEXT_ARRAY)));
    dispatch(setTimeLeft(30));
    dispatch(setShowResults(false));
  };

  return (
    <AppWrapper>
      <InstructionsModal />
      <TextInput
        text={text}
        userInput={userInput}
        onTextInput={handleTextInput}
        timeLeft={timeLeft}
        onRestart={handleRestart}
      />
      {showResults && (
        <ResultsScreen
          wpm={wpm}
          errors={errors}
          elapsedTime={elapsedTime}
          onRestart={handleRestart}
        />
      )}
    </AppWrapper>
  );
};

export default App;
