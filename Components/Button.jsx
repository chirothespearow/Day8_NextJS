import React from 'react'

function Button({tcolor = 'black', bgColour = 'blue', text = "Default"}) {
  return (
    <div>
        <button style = {{color : tcolor,backgroundColor : bgColour}}>{text}</button>
    </div>
  )
}

export default Button