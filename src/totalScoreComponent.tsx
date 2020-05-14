import React from 'react';
import { getTotalScore } from './averageService';
const classes = require('./totalScoreComponent.scss');

export const TotalScoreComponent: React.FunctionComponent = () => {
  const [totalScore, setTotalScore] = React.useState<number>(0);
  const scores: number[] = [90, 75, 60, 99, 94, 30];

  React.useEffect(() => {
    setTotalScore(getTotalScore(scores));
  }, []);
  return (
    <div>
      <span className={`jumbotron ${classes.resultBackground}`}>
        <b>Puntuación total:</b> {totalScore}
      </span>
    </div>
  );
};
