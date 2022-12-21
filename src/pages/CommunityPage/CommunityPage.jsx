import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CommunityPage.css";

import * as communityAPI from "../../utilities/community-api";

import Logo from "../../components/Logo/Logo";
// import TopUsers from "../../components/TopUsers/TopUsers";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import CommunityEmojiList from "../../components/CommunityEmojiList/CommunityEmojiList";

export default function CommunityPage({ user, setUser }) {
	const [emojis, setEmojis] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchEmojis() {
			const shared = await communityAPI.getShared();
			setEmojis(shared);
		}
		fetchEmojis();

		async function fetchUsers() {
			const users = await communityAPI.getUsers();
			setUsers(users);
		}
		fetchUsers();
	}, []);

	return (
		<div className="CommunityPage">
			<nav>
					<Logo className="logo" />
					<UserLogOut className="UserLogOut" user={user} setUser={setUser} />
				<div className="links">
					<Link className="Link" to="/emojis">
						<span>MY EMOJIS</span>
					</Link>
					<Link className="Link" to="/emojis/new">
						<span>MAKE NEW EMOJI</span>
					</Link>
				</div>
			</nav>
			<nav className="tablet">
				<Logo className="logo-tablet" />
				<input type="checkbox" name="hb" id="hb" className="hb" />
				<label htmlFor="hb" className="menu">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</label>
				<div className="t-links">
					<Link className="t-Link" to="/emojis">
						<span>MY EMOJIS</span>
					</Link>
					<Link className="t-Link" to="/emojis/new">
						<p>MAKE NEW EMOJI</p>
					</Link>
					<UserLogOut className="t-UserLogOut" user={user} setUser={setUser} />
				</div>
			</nav>
			<div className="mobile-logo">
				<Logo />
			</div>
			<div className="container">
			<CommunityEmojiList emojis={emojis} users={users} user={user}/>
			</div>
			<nav className="mobile">
				<input type="checkbox" name="m-hb" id="m-hb" className="m-hb" />
				<label htmlFor="m-hb" className="menu">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 115.79 115.8"
						id="menu-icon"
					>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="5"
							y="5"
							width="42.1"
							height="42.1"
							rx="3.29"
							ry="3.29"
						></rect>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="68.71"
							y="5.01"
							width="42.09"
							height="42.09"
							rx="3.29"
							ry="3.29"
						></rect>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="5"
							y="68.7"
							width="42.1"
							height="42.1"
							rx="3.29"
							ry="3.29"
						></rect>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="68.71"
							y="68.71"
							width="42.09"
							height="42.09"
							rx="3.29"
							ry="3.29"
						></rect>
					</svg>
				</label>
				<div className="m-links">
					<Link className="m-Link" to="/emojis">
						<span>MY EMOJIS</span>
					</Link>
					<Link className="m-Link" to="/emojis/new">
						<span>MAKE NEW EMOJI</span>
					</Link>
					<UserLogOut className="m-UserLogOut" user={user} setUser={setUser} />
				</div>
			</nav>
		</div>
	);
}
