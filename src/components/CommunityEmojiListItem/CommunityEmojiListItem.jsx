import { useRef } from 'react'

import * as emojisAPI from '../../utilities/emojis-api'
// import * as usersAPI from '../../utilities/users-api'


import './CommunityEmojiListItem.css'

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


export default function CommunityEmojiListItem(props) {

  
  const svgRef = useRef()
  
  const downloadSVG = async () => {
    let svgName = document.getElementsByClassName('preview-img')
    for (let i = 0; i < svgName.length; i++) {
      svgName[i].setAttribute("height", 36)
      svgName[i].setAttribute("width", 36)
    }
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], {type: 'image/scg+xml'});
    downloadImg(blob, `${props.emoji.name}.svg`)
    for (let i = 0; i < svgName.length; i++) {
      svgName[i].setAttribute("height", '150px')
      svgName[i].setAttribute("width", '150px')
    }
    if (props.user._id !== props.emoji.user._id) {
        await emojisAPI.addDL(props.emoji._id)
        // await usersAPI.addDL(props.emoji.user._id, props.emoji.user.username)
    }
  }

  
  
  let paths = props.emoji.layers.map(l => l.paths)
  

  return (
      <div className="box">
      <div ref={svgRef}>
      <svg className='preview-img' width="150px" height="150px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {paths.map(p => p.map(i => <path key={p._id} d={i.d} fill={i.fill} />))}
      </svg>
      </div>
      <div className="info">
          <h4 className='emoji-name'>{props.emoji.name}</h4>
          {/* <li><p>{props.emoji.user.username}</p></li> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="dl-icon" onClick={downloadSVG}><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
      </div>
      </div>
  )
}