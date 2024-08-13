import React, { useState, useEffect, useRef, useCallback } from 'react';
import { countErrors, getWordCount } from '../../assets/utils';

import {
  TextInputWrapper,
  OriginalText,
  OriginalCharacter,
  UserInput,
  Timer,
  ResultsOverlay,
} from './TextInputStyle';

const TextInput = ({ text, userInput, onTextInput, onRestart }) => {
  // Состояния компонента
  const [timerStarted, setTimerStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showResults, setShowResults] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);

  // Ссылки на элементы DOM и интервал таймера
  const inputRef = useRef(null);
  const intervalRef = useRef(null);

  // Мемоизированная функция для расчета WPM
  const memoizedCalculateWpm = useCallback(
    (wordCount, elapsedTimeInMs) => Math.round((wordCount * 60000) / elapsedTimeInMs),
    [],
  );

  // При первом рендере, фокусируемся на поле ввода
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Запуск и управление таймером
  useEffect(() => {
    if (timerStarted) {
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const secondsLeft = 30 - Math.floor(elapsedTime / 1000);
        setTimeLeft(secondsLeft);
        if (secondsLeft <= 0) {
          clearInterval(intervalRef.current);
          setShowResults(true);
          setWpm(memoizedCalculateWpm(getWordCount(userInput), elapsedTime));
          setErrors(countErrors(text, userInput));
        }
      }, 100);
      return () => clearInterval(intervalRef.current);
    }
  }, [timerStarted, startTime, userInput, text, memoizedCalculateWpm]);

  // Обработчик ввода текста
  const handleTextInput = useCallback(
    (input) => {
      onTextInput(input);
      if (!timerStarted) {
        setTimerStarted(true);
        setStartTime(Date.now());
      }
    },
    [onTextInput, timerStarted],
  );

  // Обработчик перезапуска упражнения
  const handleRestart = useCallback(() => {
    clearInterval(intervalRef.current);
    setTimerStarted(false);
    setStartTime(null);
    setTimeLeft(30);
    setShowResults(false);
    setWpm(0);
    setErrors(0);
    onRestart();
  }, [onRestart]);

  return (
    <TextInputWrapper>
      <OriginalText>
        {text.split('').map((char, index) => (
          <OriginalCharacter
            key={index}
            isCorrect={userInput[index] === char}
            userInputLength={userInput.length}
            index={index}>
            {char}
          </OriginalCharacter>
        ))}
      </OriginalText>
      <UserInput
        ref={inputRef}
        value={userInput}
        onChange={(event) => handleTextInput(event.target.value)}
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
      />
      <Timer>{timeLeft}s</Timer>
      {showResults && (
        <ResultsOverlay>
          <div>WPM: {wpm}</div>
          <div>Errors: {errors}</div>
          <button onClick={handleRestart}>Restart</button>
        </ResultsOverlay>
      )}
    </TextInputWrapper>
  );
};

export default TextInput;
