import React from 'react'

const Button = ({ clickButton, showComments }) => {

  const label = showComments ? 'Show more comments' : 'Hide comments'

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