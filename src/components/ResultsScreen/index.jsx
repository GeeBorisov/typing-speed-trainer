import React, { useCallback } from 'react';
import {
  ResultsWrapper,
  ResultsText,
  StatsWrapper,
  Stat,
  RestartButton,
} from './ResultsScreenStyle';
import { useSelector, useDispatch } from 'react-redux';

import { resetResults } from '../../redux/slices/resultsSlice';

// Используем React.memo для оптимизации производительности компонента
const ResultsScreen = React.memo(({ onRestart }) => {
  // Извлекаем необходимые данные из состояния Redux
  const { wpm, errors } = useSelector((state) => state.results);
  const dispatch = useDispatch();

  // Создаем обработчик для кнопки "Перезапустить"
  const handleRestart = useCallback(() => {
    // Сбрасываем данные с результатами в Redux
    dispatch(resetResults());
    // Вызываем функцию перезапуска, переданную из родительского компонента
    onRestart();
  }, [dispatch, onRestart]);

  return (
    <ResultsWrapper>
      <ResultsText>Результаты</ResultsText>
      <StatsWrapper>
        <Stat>Скорость печати: {wpm} слов в минуту</Stat>
        <Stat>Ошибок: {errors}</Stat>
      </StatsWrapper>
      <RestartButton onClick={handleRestart}>Перезапустить</RestartButton>
    </ResultsWrapper>
  );
});

export default ResultsScreen;
