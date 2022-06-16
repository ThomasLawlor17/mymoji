import { useCallback, useRef, ReactDOM } from 'react'
import './Preview.css'

import NameInput from '../NameInput/NameInput'

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

export default function Preview(props) {

  const svgRef = useRef()

  const downloadSVG = () => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], {type: 'image/scg+xml'});
    downloadImg(blob, `${props.name}.svg`)
  }

  return (
    <div>
      <div className="image">
      <div className='img-box' ref={svgRef}>
      <svg className='preview-img' width="400px" height="400px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {props.emoji.map(e => e.layers.map(l => l.paths.map(p => <path d={p.d} fill={p.fill} />)))}
      </svg> 
      </div>
      </div>
      <div className="buttons-and-stuff">
        <input type="text" name='name' value={props.name} onChange={props.handleNameChange} />
        {/* <NameInput name={props.name} setName={props.setName} /> */}
      {props.shared ? 
                          <div className='shared' onClick={() => props.handleShare()}><h2 className='share-title'>Shared:</h2><img src="https://www.svgrepo.com/show/273992/check.svg" alt="" /></div>
                          : 
                          <div className='shared' onClick={() => props.handleShare()}><h2 className='share-title'>Shared:</h2><img src="https://www.svgrepo.com/show/273966/close.svg" alt="" /></div>
                        }
      <button className='save-button' onClick={() => props.handleSave()}>Save</button>
      <button className='download-button' onClick={downloadSVG}>Download</button>
      </div>
    </div>
  )
}
