

import TopUsers from '../../components/TopUsers/TopUsers'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function CommunityPage(user, setUser) {
  return (
    <div>
        Community
        <TopUsers />
        <UserLogOut user={user} setUser={setUser} />
    </div>
  )
}
