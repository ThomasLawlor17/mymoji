import React from "react";

export default function LayerListItem(props) {

	return (
		<div className="layerListItem">
			<div className="layer">
				<svg
					width="36"
					height="36"
					viewBox="0 0 36 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{props.paths.map((p) => (
						<path d={p.d} fill={p.fill} />
					))}
				</svg>
				<div className="name">
				</div>
				<button className="moveLayer">
					<img
						src="https://www.custoji.app/images/ui/ui__icon-mover.svg"
						alt=""
					/>
				</button>
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
