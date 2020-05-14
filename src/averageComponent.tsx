import React from 'react';
import { getAvg } from './averageService';
const classes = require('./averageComponent.scss');

export const AverageComponent: React.FunctionComponent = () => {
  const [average, setAverage] = React.useState<number>(0);
  const scores: number[] = [90, 75, 60, 99, 94, 30];

  React.useEffect(() => {
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <h1 className={classes.title}>Un Hola Mundo desarrollado con React</h1>
      <div className={`jumbotron ${classes.resultBackground}`}>
        <p>
          <b>Puntuaciones de los estudiantes:</b> {scores.toString()}
        </p>
        <p>Media: {average}</p>
      </div>
    </div>
  );
};
