


// css
import './LayerList.css'

// Components
import LayerListItem from "../LayerListItem/LayerListItem"
import { useState } from 'react'
import { useEffect } from 'react'


export default function LayerList(props) {

  let parts = props.emoji.map(e => e.layers.map(l => l)).flat()

  return (
    <div className="LayerList">
      <div className="list">
          {parts.length ? null : <h2 className='no-layers'>Add some parts!</h2>}
        <ul>
        {parts.map((p) => <LayerListItem key={p._id} {...p} handleRemoveLayer={props.handleRemoveLayer} handleLayerOrderUp={props.handleLayerOrderUp} handleLayerOrderDown={props.handleLayerOrderDown} newLayerTransition={props.newLayerTransition} />)}
        </ul>
      </div>
    </div>
  )
}
