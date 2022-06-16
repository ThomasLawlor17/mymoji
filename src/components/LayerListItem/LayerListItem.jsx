import React from "react";

// css
import './LayerListItem.css'

export default function LayerListItem(props) {

	return (
		<div className="layerListItem">
			<div className="layer" draggable='true'>
				<svg
				className="layer-image"
					width="36"
					height="36"
					viewBox="0 0 36 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{props.paths.map((p) => (
						<path key={p._id} d={p.d} fill={p.fill} />
					))}
				</svg>
				<div className="name">
				</div>
					<img
					className="moveLayer"
						src="https://www.custoji.app/images/ui/ui__icon-mover.svg"
						alt=""
						draggable='false'
					/>
				<button className="deleteLayer" onClick={() => props.handleRemoveLayer(props._id)}>
					<img
						src="https://www.custoji.app/images/ui/ui__icon-trash.svg"
						alt=""
					/>
				</button>
			</div>
		</div>
	);
}
