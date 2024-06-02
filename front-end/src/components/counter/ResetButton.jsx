import {PropTypes} from 'prop-types'
import './Counter.css'

export default function ResetButton({resetParent}) {

  function resetFunction(){
    resetParent();
  }

  return (
    <div className="Reset">
      <div>
        <button className="resetButton" onClick={resetFunction} >Reset</button>
      </div>
      
    </div>
  )
}