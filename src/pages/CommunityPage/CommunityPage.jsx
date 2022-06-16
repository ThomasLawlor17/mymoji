import { Link } from 'react-router-dom'


import './CommunityPage.css'


import Logo from '../../components/Logo/Logo'
import TopUsers from '../../components/TopUsers/TopUsers'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function CommunityPage(user, setUser) {
  return (
    <div>
      			<nav>
				<ul>
					<div className="logo">
						<Logo className="logo" />
					</div>
					<div className="links">
						<Link className="Link" to="/emojis">
							<div>MY-EMOJIS</div>
						</Link>
						<Link className="Link" to="/emojis/new">
							MAKE NEW EMOJI
						</Link>
						<UserLogOut className="UserLogOut" user={user} setUser={setUser} />
					</div>
				</ul>
			</nav>
        <TopUsers />
    </div>
  )
}
