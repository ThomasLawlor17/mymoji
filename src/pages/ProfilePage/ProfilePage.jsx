import { Link } from "react-router-dom"

import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function ProfilePage(user, setUser) {
  return (
    <div>ProfilePage
        <Link to='/emojis/new'>Make New Emoji</Link>
        <Link to='/community'>Community</Link>
        <UserLogOut user={user} setUser={setUser} />
    </div>
  )
}
