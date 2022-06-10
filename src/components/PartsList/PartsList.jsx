// css
import "./PartsList.css";

// Components
import PartsListItem from "../PartsListItem/PartsListItem";
import CategoryList from "../CategoryList/CategoryList";

export default function PartsList(props) {
	return (
		<div className="PartsList">
			<h1>Parts List</h1>
			<div className="PartsList-grid">
				<CategoryList />
                <div className="PartsListItems">
				<PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                <PartsListItem />
                </div>
			</div>
		</div>
	);
}
