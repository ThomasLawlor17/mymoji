import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ProfilePage.css";

import * as emojisAPI from "../../utilities/emojis-api";

import Logo from "../../components/Logo/Logo";
import EmojiList from "../../components/EmojiList/EmojiList";
import ProfileStats from "../../components/ProfileStats/ProfileStats";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

export default function ProfilePage({ user, setUser }) {
	const [emojis, setEmojis] = useState([]);

	useEffect(() => {
		async function fetchProfileEmojis() {
			const emojis = await emojisAPI.getProfileEmojis();
			setEmojis(emojis);
		}
		fetchProfileEmojis();
	}, []);

	const username = user.username
	const downloads = user.downloads
	const isoStr = user.createdAt
	const date = new Date(isoStr)
	const time = date.getTime()
	const now = new Date().getTime()
	const userTime = Math.ceil((now - time) / (1000 * 3600 * 24))
	const date2 = new Date(isoStr).toLocaleDateString('ca')


	return (
		<div>
			<nav>
					<Logo className="logo" />
					<UserLogOut className="UserLogOut" user={user} setUser={setUser} />
				<div className="links">
					<Link className="Link" to="/community">
						<span>COMMUNITY</span>
					</Link>
					<Link className="Link" to="/emojis/new">
						<span>MAKE NEW EMOJI</span>
					</Link>
				</div>
			</nav>
			<div className="container">
				<EmojiList emojis={emojis} setEmojis={setEmojis} />
				<ProfileStats emojis={emojis} username={username} downloads={downloads} time={userTime} date={date2}/>
			</div>
		</div>
	);
}
