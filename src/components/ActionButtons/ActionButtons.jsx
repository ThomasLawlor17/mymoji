// css
import { useState } from 'react'
import './ActionButtons.css'

export default function ActionButtons(props) {

  return (
    <div>
      <button className='saveButton' onClick={props.handleSave}>SAVE EMOJI!</button>
    </div>
  )
}
