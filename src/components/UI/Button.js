import React from 'react'

const Button = ({ clickButton, label }) => {

  return (
    <button 
      onClick={clickButton} 
      type="button" 
      className="btn btn-primary btn-lg"
    >
      {label}
    </button>
  )
}

export default Button