import './Preview.css'

export default function Preview(props) {
  console.log(props.emoji)
  let parts = props.emoji.map(e => e.layers.map(l => l)).flat()
  console.log('Parts: ', parts)
  let paths = props.emoji.map(e => e.layers.map(l => l.paths.map(p => p)))
  console.log('P', paths)
  return (
    <div>
      <svg width="400px" height="400px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {props.emoji.map(e => e.layers.map(l => l.paths.map(p => <path d={p.d} fill={p.fill} />)))}
      </svg> 

    </div>
  )
}
