// css
import "./PartsListItem.css";

export default function PartsListItem(props) {
	return (
		<div className="PartsListItem">
			<button onClick={() => props.handleAddToLayers(props._id)}>
			<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				{props.paths.map(p => <path d={p.d} fill={p.fill} />)}
			</svg>
			</button>
		</div>
	);
}
