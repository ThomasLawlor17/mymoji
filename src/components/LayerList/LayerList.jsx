


// css
import './LayerList.css'

// Components
import LayerListItem from "../LayerListItem/LayerListItem"


export default function LayerList(props) {


  let parts = props.emoji.map(e => e.layers.map(l => l)).flat()


  return (
    <div className="LayerList">
      <h1>Layers</h1>
      <div className="list">
        {parts.map((p) => <LayerListItem key={p._id} {...p} handleRemoveLayer={props.handleRemoveLayer} handleLayerOrderUp={props.handleLayerOrderUp} handleLayerOrderDown={props.handleLayerOrderDown} />)}
      </div>
    </div>
  )
}
