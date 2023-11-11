import React from 'react'
import "../../App.css";

const coustomButton = ({onClick,label,variant}) => {
  return (
    <div>
      <Button className="button" onClick={onClick} variant={variant} >{label}</Button>
    </div>
  )
}

export default coustomButton;