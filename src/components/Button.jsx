import React from 'react'
import "../styles/button.css"

const Button = (props) => {

  const isOperator = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div
      className={`container-btn ${isOperator(props.children) ? 'operator' : null}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Button
