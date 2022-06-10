// css
import "./PartsListItem.css";

export default function PartsListItem(props) {
	return (
		<div className="PartsListItem">
			<button><img src="{props.part}" alt="Part" /></button>
		</div>
	);
}
