import { useDrag, useDrop } from 'react-dnd'

// Components
import LayerListItem from "../LayerListItem/LayerListItem"

export default function LayerList(props) {

  // const [{ isOver }, orderListRef] = useDrop({
  //   accept: 'layerList',
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver()
  //   })
  // })

  let parts = props.emoji.map(e => e.layers.map(l => l)).flat()

  return (
    <div className="LayerList">
      <div className="list">
        {parts.map((p) => <LayerListItem key={p._id} {...p}  />)}
      </div>
    </div>
  )
}
