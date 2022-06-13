import React from 'react'

export default function LayerListItem(layerListItem, layerOrder) {
  return (
    <div className='layerListItem'>
      <><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {layerListItem.paths.map(item => <path d={item.d} fill={item.fill} />
          )}
        </svg><div>Layer {layerOrder}</div></>
    </div>
  )
}
