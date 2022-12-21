import { useRef } from "react";

import "./EmojiListItem.css";

function downloadImg(blob, file) {
	const objectUrl = URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = objectUrl;
	link.download = file;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

export default function EmojiListItem(props) {
	const svgRef = useRef();

	const downloadSVG = () => {
		let svgName = document.getElementsByClassName("preview-img");
		for (let i = 0; i < svgName.length; i++) {
			svgName[i].setAttribute("height", 36);
			svgName[i].setAttribute("width", 36);
		}
		console.log(svgName);
		const svg = svgRef.current.innerHTML;
		const blob = new Blob([svg], { type: "image/scg+xml" });
		downloadImg(blob, `${props.emoji.name}.svg`);
		for (let i = 0; i < svgName.length; i++) {
			svgName[i].setAttribute("height", "150px");
			svgName[i].setAttribute("width", "150px");
		}
	};

	let paths = props.emoji.layers.map((l) => l.paths);

	return (
		<div className="box">
			<div ref={svgRef}>
				<svg
					className="preview-img"
					width="150px"
					height="150px"
					viewBox="0 0 36 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{paths.map((p) =>
						p.map((i) => <path key={p._id} d={i.d} fill={i.fill} />)
					)}
				</svg>
			</div>
			<div className="info">
				<h2 className="emoji-name">{props.emoji.name}</h2>
				<div className="icons">
					<div className="share-icon">
						{props.emoji.shared ? (
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
									className="share-check"
								>
									<path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
								</svg>
							</>
						) : (
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
									className="share-x"
								>
									<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L440.6 320H618.7c11.8 0 21.3-9.6 21.3-21.3C640 239.8 592.2 192 533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 30.2-10.5 58-28 79.9l-25.2-19.7C408.1 267.7 416 246.8 416 224c0-53-43-96-96-96c-31.1 0-58.7 14.8-76.3 37.7l-40.6-31.8c13-14.2 20.9-33.1 20.9-53.9c0-44.2-35.8-80-80-80C116.3 0 91.9 14.1 77.5 35.5L38.8 5.1zM106.7 192C47.8 192 0 239.8 0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-20.6-18.2-35.2-42.8-40.8-70.8L121.8 192H106.7zM261.3 352C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H485.3c10.5 0 19.5-6 23.9-14.8L324.9 352H261.3zM512 160c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
								</svg>
							</>
						)}
					</div>
					<svg
						xmlns=" http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="dl-icon"
						onClick={downloadSVG}
					>
						<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" />
					</svg>
				</div>
			</div>
		</div>
	);
}
