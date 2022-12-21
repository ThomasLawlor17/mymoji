import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

// Utils
import * as partsAPI from "../../utilities/parts-api";
import * as emojisAPI from "../../utilities/emojis-api";

// css
import "./CreatePage.css";

// Componenets
import PartsList from "../../components/PartsList/PartsList";
import Preview from "../../components/Preview/Preview";
import LayerList from "../../components/LayerList/LayerList";
import CategoryList from "../../components/CategoryList/CategoryList";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import Logo from "../../components/Logo/Logo";
import CategoryListTablet from "../../components/CategoryList/CategoryListTablet";

export default function CreatePage({ user, setUser }) {
	const [parts, setParts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [activeCat, setActiveCat] = useState("");
	const [layers, setLayers] = useState([]);
	const [newLayerTransition, setNewLayerTransition] = useState(false);
	const [shared, setShared] = useState(false);
	const [name, setName] = useState("");
	const [layersActive, setLayersActive] = useState(false);
	const [bubblesAnimate, setBubblesAnimate] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Load parts into state
		async function fetchParts() {
			const parts = await partsAPI.getParts();
			setParts(parts);
			// Extract categories from the parts to order
			setCategories(
				parts.reduce((cats, part) => {
					const cat = part.category.name;
					return cats.includes(cat) ? cats : [...cats, cat];
				}, [])
			);
			setActiveCat(parts[52].category.name);
		}
		fetchParts();
		// Load emoji into state
		async function fetchLayers() {
			const layers = await emojisAPI.getEmoji();
			setLayers(layers);
		}
		fetchLayers();
	}, []);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	console.log(width);

	const handleMobileLayers = (e) => {
		setActiveCat("");
		setLayersActive(true);
	};
	const handleMobileHeads = (e) => {
		setActiveCat("Heads");
		setLayersActive(false);
	};
	const handleMobileEyes = (e) => {
		setActiveCat("Eyes");
		setLayersActive(false);
	};
	const handleMobileMouths = (e) => {
		setActiveCat("Mouths");
		setLayersActive(false);
	};
	const handleMobileToppers = (e) => {
		setActiveCat("Toppers");
		setLayersActive(false);
	};

	async function handleAddToLayers(partId) {
		const layers = await emojisAPI.addPartToLayers(partId);
		setLayers(layers);
		setNewLayerTransition(true);
		setBubblesAnimate(true);
		setTimeout(() => {
			setNewLayerTransition(false);
		}, 10);
		setTimeout(() => {
			setBubblesAnimate(false);
		}, 500);
	}

	async function handleRemoveLayer(partId) {
		const emoji = await emojisAPI.removeLayer(partId);
		setLayers(emoji);
	}

	async function handleSave() {
		await emojisAPI.saveEmoji({ name });
		setLayers([]);
		setShared(false);
		setName("");
	}

	async function handleShare() {
		let share = await emojisAPI.shareEmoji();
		console.log(share.shared);
		setShared(share);
	}

	async function handleLayerOrderUp(partId) {
		let emoji = await emojisAPI.reorderLayerUp(partId);
		setLayers(emoji);
	}

	async function handleLayerOrderDown(partId) {
		let emoji = await emojisAPI.reorderLayerDown(partId);
		setLayers(emoji);
	}

	async function handleNameChange(e) {
		setName(e.target.value);
	}

	return (
		<main className="CreatePage">
			<nav>
				<Logo className="logo" />
				<UserLogOut className="UserLogOut" user={user} setUser={setUser} />
				<div className="links">
					<Link className="Link" to="/community">
						<span>COMMUNITY</span>
					</Link>
					<Link className="Link" to="/emojis">
						<span>MY EMOJIS</span>
					</Link>
				</div>
			</nav>
			<nav className="tablet">
				<Logo className="logo-tablet" />
				<input type="checkbox" name="hb" id="hb" className="hb" />
				<label htmlFor="hb" className="menu">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</label>
				<div className="t-links">
					<Link className="t-Link" to="/community">
						<span>COMMUNITY</span>
					</Link>
					<Link className="t-Link" to="/emojis">
						<p>MY EMOJIS</p>
					</Link>
					<UserLogOut className="t-UserLogOut" user={user} setUser={setUser} />
				</div>
			</nav>
			<div className="mobile-logo">
				<Logo />
			</div>
			<div className="content">
				<div className={!activeCat && width <= 1000 ? "hidden parts" : "parts"}>
					<CategoryListTablet
						categories={categories}
						activeCat={activeCat}
						layersActive={layersActive}
						handleMobileHeads={handleMobileHeads}
						handleMobileEyes={handleMobileEyes}
						handleMobileMouths={handleMobileMouths}
						handleMobileToppers={handleMobileToppers}
						handleMobileLayers={handleMobileLayers}
						width={width}
					/>
					<CategoryList
						categories={categories}
						activeCat={activeCat}
						setActiveCat={setActiveCat}
					/>
					<PartsList
						id="PartsList"
						parts={parts.filter((part) => part.category.name === activeCat)}
						handleAddToLayers={handleAddToLayers}
					/>
				</div>
				<div className="emoji">
					<Preview
						emoji={layers}
						name={name}
						setName={setName}
						shared={shared}
						handleShare={handleShare}
						handleSave={handleSave}
						handleNameChange={handleNameChange}
						bubblesAnimate={bubblesAnimate}
					/>
				</div>
				<div className={layersActive ? "layers" : "hidden layers"}>
					<h1>Layers</h1>
					<CategoryListTablet
						categories={categories}
						activeCat={activeCat}
						layersActive={layersActive}
						handleMobileHeads={handleMobileHeads}
						handleMobileEyes={handleMobileEyes}
						handleMobileMouths={handleMobileMouths}
						handleMobileToppers={handleMobileToppers}
						handleMobileLayers={handleMobileLayers}
						width={width}
					/>
					<LayerList
						emoji={layers}
						handleRemoveLayer={handleRemoveLayer}
						handleLayerOrderUp={handleLayerOrderUp}
						handleLayerOrderDown={handleLayerOrderDown}
						newLayerTransition={newLayerTransition}
					/>
				</div>
			</div>
			<nav className="mobile">
				<input type="checkbox" name="m-hb" id="m-hb" className="m-hb" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 484.3 484.3"
					className={
						"Heads" === activeCat
							? "m-icon heads-icon active"
							: "m-icon heads-icon"
					}
					onClick={handleMobileHeads}
				>
					<path d="M262.198,0c-28.1,0-55.1,6.1-80.3,18c-32,14.9-59.1,38.4-78.4,68c-19.9,30.5-30.4,65.8-30.4,102.3V214l-34,65    c-6.5,12.5-6.8,25.3-0.8,35.3s17.5,15.7,31.6,15.7h3.2v51.1c0,27.7,22.5,50.2,50.2,50.2c0.7,0,1.3,0,2-0.1l34.9-5.2v35.1    c0,0.5,0,1.1,0.1,1.6c1,12.4,11,21.6,23.7,21.6l0,0c1.5,0,3-0.1,4.6-0.4l181.5-32.2c13.2-2.3,23.6-14.7,23.6-28.1v-101    c36.1-35.3,56.6-84,56.6-134.5C450.298,84.4,365.898,0,262.198,0z M370.998,306.8c-2.8,2.6-4.4,6.2-4.4,9.9v106.7    c-0.1,0.5-0.8,1.4-1.3,1.6l-178.2,31.5l-0.1-46.5c0-3.9-1.7-7.7-4.7-10.2c-2.5-2.1-5.6-3.3-8.8-3.3c-0.7,0-1.3,0-2,0.1l-49.3,7.3    c-12.4-0.5-22.3-10.7-22.3-23.2v-64.6c0-7.5-6-13.5-13.5-13.5h-16.5c-5.1,0-7.8-1.4-8.5-2.6s-0.8-4.3,1.6-8.8l35.6-67.9    c1-1.9,1.5-4.1,1.5-6.3v-29c0-62.4,36.6-119.6,93.2-145.9h0.1c21.5-10,44.7-15.1,68.8-15.1c88.8,0,161.1,72.3,161.1,161.1    C423.298,233.1,404.198,276.4,370.998,306.8z" />
					<path d="M147.898,202.6c-9.8,0-17.8,8-17.8,17.8s8,17.8,17.8,17.8s17.8-8,17.8-17.8S157.698,202.6,147.898,202.6z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					x="0"
					y="0"
					viewBox="0 0 100 100"
					className={
						"Eyes" === activeCat
							? "m-icon eyes-icon active"
							: "m-icon eyes-icon"
					}
					onClick={handleMobileEyes}
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					x="0"
					y="0"
					viewBox="0 10 30 30"
					className={
						"Mouths" === activeCat
							? "m-icon mouths-icon active"
							: "m-icon mouths-icon"
					}
					onClick={handleMobileMouths}
				>
					<path
						d="M18 22C14.377 22 11.973 21.578 9 21C8.321 20.869 7 21 7 23C7 27 11.595 32 18 32C24.404 32 29 27 29 23C29 21 27.679 20.868 27 21C24.027 21.578 21.623 22 18 22Z"
						fill="currentColor"
					/>
					<path
						d="M9 23C9 23 12 24 18 24C24 24 27 23 27 23C27 23 25.656 29.75 18 29.75C10.344 29.75 9 23 9 23Z"
						fill="white"
					/>
					<path
						d="M18 27.594C14.404 27.594 11.728 27.222 10.063 26.849L9.23801 24.978C10.061 25.29 13.127 25.875 18.001 25.875C22.955 25.875 26.038 25.259 26.865 24.937L26.164 26.779C24.53 27.159 21.745 27.594 18 27.594Z"
						fill="currentColor"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					className={
						"Toppers" === activeCat
							? "m-icon toppers-icon active"
							: "m-icon toppers-icon"
					}
					onClick={handleMobileToppers}
				>
					<path d="M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
				</svg>
				<svg
					id="list"
					data-name="Capa 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 60.02 44.9"
					className={
						layersActive ? "layers-icon m-icon l-active" : "m-icon layers-icon"
					}
					onClick={handleMobileLayers}
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
				</svg>
				<label htmlFor="m-hb" className="menu">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 115.79 115.8"
						id="menu-icon"
					>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="5"
							y="5"
							width="42.1"
							height="42.1"
							rx="3.29"
							ry="3.29"
						></rect>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="68.71"
							y="5.01"
							width="42.09"
							height="42.09"
							rx="3.29"
							ry="3.29"
						></rect>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="5"
							y="68.7"
							width="42.1"
							height="42.1"
							rx="3.29"
							ry="3.29"
						></rect>
						<rect
							fill="none"
							stroke="currentColor"
							strokeWidth="6"
							x="68.71"
							y="68.71"
							width="42.09"
							height="42.09"
							rx="3.29"
							ry="3.29"
						></rect>
					</svg>
				</label>
				<div className="m-links">
					<Link className="m-Link" to="/community">
						<span>COMMUNITY</span>
					</Link>
					<Link className="m-Link" to="/emojis">
						<span>MY EMOJIS</span>
					</Link>
					<UserLogOut className="m-UserLogOut" user={user} setUser={setUser} />
				</div>
			</nav>
		</main>
	);
}
