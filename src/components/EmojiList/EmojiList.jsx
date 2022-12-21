import React from 'react'
import EmojiListItem from '../EmojiListItem/EmojiListItem'

import './EmojiList.css'

export default function EmojiList(props) {
  return (
      <div className="emoji-grid">
      {props.emojis.map(e => <EmojiListItem key={e._id} emoji={e} />)}
      </div>
  )
}
