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

export default function CreatePage({ user, setUser }) {
	const [parts, setParts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [activeCat, setActiveCat] = useState("");
	const [layers, setLayers] = useState([]);
	const [shared, setShared] = useState(false);
	const [name, setName] = useState("Untitled");

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

	async function handleAddToLayers(partId) {
		const layers = await emojisAPI.addPartToLayers(partId);
		setLayers(layers);
	}

	async function handleRemoveLayer(partId) {
		const emoji = await emojisAPI.removeLayer(partId);
		setLayers(emoji);
	}

	async function handleSave() {
		// const tempName = {name}
		await emojisAPI.saveEmoji({name});
		setLayers([]);
	}

	async function handleShare() {
		let share = await emojisAPI.shareEmoji();
		setShared(share);
	}

	async function handleLayerOrderUp(partId) {
		let emoji = await emojisAPI.reorderLayerUp(partId)
		setLayers(emoji)
	}

	async function handleLayerOrderDown(partId) {
		let emoji = await emojisAPI.reorderLayerDown(partId)
		setLayers(emoji)
	}

	async function handleNameChange(e) {
		setName(e.target.value)
	}



	return (
		<main className="CreatePage">
			<nav>
                <ul>
				<div className="logo">
					<Logo className="logo" />
				</div>
				<div className="links">
					<Link className="Link" to="/community">
						<div>COMMUNITY</div>
					</Link>
					<Link className="Link" to="/emojis">
						MY-EMOJIS
					</Link>
					<UserLogOut className="UserLogOut" user={user} setUser={setUser} />
				</div>
                </ul>
			</nav>
			<div className="content">
				<div className="parts">
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
					/>
				</div>
				<div className="layers">
					<LayerList emoji={layers} handleRemoveLayer={handleRemoveLayer} handleLayerOrderUp={handleLayerOrderUp} handleLayerOrderDown={handleLayerOrderDown} />
				</div>
			</div>
		</main>
	);
}
