// css
import "./PartsList.css";

// Components
import PartsListItem from "../PartsListItem/PartsListItem";

export default function PartsList(props) {
    return(
        <div>
            {props.parts.map(p => 
                <PartsListItem key={p._id} {...p} handleAddToLayers={props.handleAddToLayers} />
                )}
        </div>
    )
}
