import { useCallback, useRef } from 'react'
import './Preview.css'



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

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], {type: 'image/scg+xml'});
    downloadImg(blob, 'mymoji.svg')
  }, [])

  return (
    <div>
      <div ref={svgRef}>
      <svg width="400px" height="400px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {props.emoji.map(e => e.layers.map(l => l.paths.map(p => <path d={p.d} fill={p.fill} />)))}
      </svg> 
      </div>

      <button onClick={downloadSVG}>Download</button>
    </div>
  )
}
