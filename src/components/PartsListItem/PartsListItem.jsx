// css
import "./PartsListItem.css";

export default function PartsListItem(part, handleAddToLayers) {
	return (
		<div className="PartsListItem">
			<button onClick={() => handleAddToLayers(part._id)}>
			<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				{part.paths.map(p => <path d={p.d} fill={p.fill} />)}
			</svg>
			</button>
		</div>
	);
}
