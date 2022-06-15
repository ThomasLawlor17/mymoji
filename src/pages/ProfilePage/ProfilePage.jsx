import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import * as emojisAPI from '../../utilities/emojis-api'



import EmojiList from "../../components/EmojiList/EmojiList"
import ProfileStats from "../../components/ProfileStats/ProfileStats"
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function ProfilePage({user, setUser}) {

  const [emojis, setEmojis] = useState([])

  useEffect(() => {
    async function fetchProfileEmojis() {
      const emojis = await emojisAPI.getProfileEmojis()
      console.log(emojis)
      setEmojis(emojis)
    }
    fetchProfileEmojis()
  }, [])


  return (
    <div>
      <nav>
        <Link to='/emojis/new'>Make New Emoji</Link>
        <Link to='/community'>Community</Link>
        <UserLogOut user={user} setUser={setUser} />
      </nav>
      <div>
        <EmojiList emojis={emojis} setEmojis={setEmojis} />
        <ProfileStats emojis={emojis} />
      </div>
    </div>
  )
}
