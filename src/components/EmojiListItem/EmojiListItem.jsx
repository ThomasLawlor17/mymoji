import { useCallback, useRef } from 'react'



import './EmojiListItem.css'

function downloadImg(blob, file) {
  const objectUrl = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = objectUrl
  link.download = file
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000)
}


export default function EmojiListItem(props) {
  console.log(props.emoji.name)
  
  const svgRef = useRef()
  
  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], {type: 'image/scg+xml'});
    downloadImg(blob, `${props.emoji.name}.svg`)
  }, [])
  
  
  
  let paths = props.emoji.layers.map(l => l.paths)
  

  return (
    <div>
      <div className="box">
      <div ref={svgRef}>
      <svg width="150px" height="150px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {paths.map(p => p.map(i => <path key={p._id} d={i.d} fill={i.fill} />))}
      </svg>
      </div>
      <div className="info">
        <ul className='info-list'>
          <li><h2 className='emoji-name'>{props.emoji.name}</h2></li>
          <li>{props.emoji.downloads}</li>
          <li className='shared-images'>
            <div><img className='people' src="https://www.svgrepo.com/show/60828/team.svg" alt="" /></div>
          {props.emoji.shared ? 
          <div><img className='shared' src="https://www.svgrepo.com/show/273992/check.svg" alt="" /></div>
          : 
          <div><img className='shared' src="https://www.svgrepo.com/show/273966/close.svg" alt="" /></div>
        }
          </li>
        </ul>
      </div>
      <button className='download-img-btn' onClick={() => downloadSVG()}><img className='download-image' src='https://www.pngrepo.com/png/55488/180/download.png' alt="Download" /></button>
      </div>
    </div>
  )
}
