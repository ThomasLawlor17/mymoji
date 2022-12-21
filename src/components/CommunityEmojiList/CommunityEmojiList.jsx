import "./CommunityEmojiList.css";

import CommunityEmojiListItem from "../CommunityEmojiListItem/CommunityEmojiListItem";

export default function CommunityEmojiList(props) {
	return (
		<div className="emoji-grid">
			{props.emojis.map((e) => (
				<CommunityEmojiListItem key={e._id} emoji={e} user={props.user} />
			))}
		</div>
	);
}
