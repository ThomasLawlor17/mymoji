// css
import "./CategoryList.css";

// Components

export default function CategoryListTablet({ categories, activeCat, width, layersActive, handleMobileLayers, handleMobileHeads, handleMobileEyes, handleMobileMouths, handleMobileToppers }) {

	const cats = categories.map((cat) => 
		<button
			key={cat}
			id='cat-button'
			onClick={cat === "Heads" ? handleMobileHeads : cat === "Eyes" ? handleMobileEyes : cat === "Mouths" ? handleMobileMouths : cat === "Toppers" ? handleMobileToppers : null}
		>
			{cat === "Heads" ? <svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 484.3 484.3"
					className={"Heads" === activeCat ? "heads-icon active" : "heads-icon"}
				>
					<path d="M262.198,0c-28.1,0-55.1,6.1-80.3,18c-32,14.9-59.1,38.4-78.4,68c-19.9,30.5-30.4,65.8-30.4,102.3V214l-34,65    c-6.5,12.5-6.8,25.3-0.8,35.3s17.5,15.7,31.6,15.7h3.2v51.1c0,27.7,22.5,50.2,50.2,50.2c0.7,0,1.3,0,2-0.1l34.9-5.2v35.1    c0,0.5,0,1.1,0.1,1.6c1,12.4,11,21.6,23.7,21.6l0,0c1.5,0,3-0.1,4.6-0.4l181.5-32.2c13.2-2.3,23.6-14.7,23.6-28.1v-101    c36.1-35.3,56.6-84,56.6-134.5C450.298,84.4,365.898,0,262.198,0z M370.998,306.8c-2.8,2.6-4.4,6.2-4.4,9.9v106.7    c-0.1,0.5-0.8,1.4-1.3,1.6l-178.2,31.5l-0.1-46.5c0-3.9-1.7-7.7-4.7-10.2c-2.5-2.1-5.6-3.3-8.8-3.3c-0.7,0-1.3,0-2,0.1l-49.3,7.3    c-12.4-0.5-22.3-10.7-22.3-23.2v-64.6c0-7.5-6-13.5-13.5-13.5h-16.5c-5.1,0-7.8-1.4-8.5-2.6s-0.8-4.3,1.6-8.8l35.6-67.9    c1-1.9,1.5-4.1,1.5-6.3v-29c0-62.4,36.6-119.6,93.2-145.9h0.1c21.5-10,44.7-15.1,68.8-15.1c88.8,0,161.1,72.3,161.1,161.1    C423.298,233.1,404.198,276.4,370.998,306.8z" />
					<path d="M147.898,202.6c-9.8,0-17.8,8-17.8,17.8s8,17.8,17.8,17.8s17.8-8,17.8-17.8S157.698,202.6,147.898,202.6z" />
				</svg>
				: cat === "Eyes" ? <svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				x="0"
				y="0"
				viewBox="0 0 100 100"
				className={"Eyes" === activeCat ? "eyes-icon active" : "eyes-icon"}
			>
				<ellipse
					cx="27"
					cy="50"
					rx="22"
					ry="42.5"
					fill="none"
					stroke="currentColor"
					strokeWidth="6"
					strokeMiterlimit="10"
				/>
				<ellipse
					cx="73"
					cy="50"
					rx="22"
					ry="42.5"
					fill="none"
					stroke="currentColor"
					strokeWidth="6"
					strokeMiterlimit="10"
				/>
				<circle cx="17" cy="55" r="10" />
				<circle cx="63" cy="55" r="10" />
			</svg>
			: cat === "Mouths" ? <svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			x="0"
			y="0"
			viewBox="0 0 24 24"
			className={
				"Mouths" === activeCat ? "mouths-icon active" : "mouths-icon"
			}
		>
<path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M17,13 C17,15.7614237 14.7614237,18 12,18 C9.23857625,18 7,15.7614237 7,13 L7,13 Z" fill="currentColor"></path>
		</svg>
		: cat === "Toppers" ? <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		className={
			"Toppers" === activeCat ? "toppers-icon active" : "toppers-icon"
		}
	>
		<path d="M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
	</svg>
	: null}
		</button>
	);
	return <ul className="CategoryListTablet">{cats}<button id="cat-button" onClick={handleMobileLayers}><svg
    id="list"
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60.02 44.9"
    className={layersActive ? "layers-icon active l-active" : "layers-icon"}
>
    <path
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        d="M16.82 3.63h40.2"
    ></path>
    <circle
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        cx="3.93"
        cy="3.93"
        r=".93"
    ></circle>
    <path
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        d="M16.82 22.17h40.2"
    ></path>
    <circle
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        cx="3.93"
        cy="22.47"
        r=".93"
    ></circle>
    <path
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        d="M16.82 40.67h40.2"
    ></path>
    <circle
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        cx="3.93"
        cy="40.97"
        r=".93"
    ></circle>
</svg></button></ul>;
}