import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CommunityPage.css";

import * as communityAPI from "../../utilities/community-api";

import Logo from "../../components/Logo/Logo";
import TopUsers from "../../components/TopUsers/TopUsers";
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
		<div>
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
			<div className="container">
			<CommunityEmojiList emojis={emojis} users={users} user={user}/>
			<TopUsers user={user} users={users}/>
			</div>
		</div>
	);
}
