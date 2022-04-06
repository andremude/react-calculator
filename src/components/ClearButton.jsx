import React from 'react'
import "../styles/clearbutton.css"

const ClearButton = (props) => {
  return (
    <div className='clear-btn' onClick={props.handleClear}>
      {props.children}
    </div>
  )
}

export default ClearButton
