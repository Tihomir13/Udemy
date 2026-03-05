import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const isCounterShown = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterShown && (
        <div className={classes.value}>{counter}</div>)}
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>
          Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(counterActions.decrement())}>
          Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(counterActions.increase(5))}>
          Increase by 5</button>
      </div>
      <div>
        <button onClick={() => dispatch(counterActions.toggle())}>
          Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
