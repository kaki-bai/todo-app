import {useState} from 'react'
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementParent(by) {
    setCount(count + by);
  }

  function decrementParent(by) {
    setCount(count - by);
  }

  function resetParent() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton by={1} incrementParent={incrementParent} decrementParent={decrementParent}/>
      <CounterButton by={2} incrementParent={incrementParent} decrementParent={decrementParent}/>
      <ResetButton resetParent={resetParent}/>
    </>
  )
}
