// css
import "./PartsList.css";

// Components
import PartsListItem from "../PartsListItem/PartsListItem";
import CategoryList from "../CategoryList/CategoryList";

export default function PartsList({parts, handleAddToLayers}) {
    const part = parts.map(part =>
        <PartsListItem key={part._id} part={part} handleAddToLayers={handleAddToLayers}
        />
    )
	return (
		<div className="PartsList">
            {part}
		</div>
	);
}
