import { useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom'

// Utils
import * as partsAPI from '../../utilities/parts-api'
import * as emojisAPI from '../../utilities/emojis-api'

// css
import "./CreatePage.css";

// Componenets
import PartsList from "../../components/PartsList/PartsList";
import Preview from "../../components/Preview/Preview";
import LayerList from "../../components/LayerList/LayerList";
import ActionButtons from "../../components/ActionButtons/ActionButtons";
import CategoryList from "../../components/CategoryList/CategoryList";

export default function CreatePage() {
	const [parts, setParts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const [layers, setLayers] = useState(null)
    
    const history = Navigate()

    useEffect(function () {
        async function fetchParts() {
            const parts = await partsAPI.getAll()
            setParts(parts)
            // Extract categories
            setCategories(parts.reduce((cats, part) => {
                const cat = part.category.name
                return cats.includes(cat) ? cats : [...cats, cat]
            }, []))
            setActiveCat(parts[52].category.name)
        }
        fetchParts()
        // Load layers
        async function fetchLayers() {
            const layers = await emojisAPI.getLayers()
            setLayers(layers)
        }
    }, [])

    async function handleAddToLayers(partId) {
        const layers = await emojisAPI.addPartToLayers(partId)
        setLayers(layers)
    }

    // async function handleSave() {
    //     await emojisAPI.saveEmoji()
    //     history.push('/emojis')
    // }

    
    return (
		<div className="CreatePage">
			<h1>Create Page</h1>
			<div className="CreatePage-grid">
                <CategoryList activeCat={activeCat} setActiveCat={setActiveCat} />
				<PartsList parts={parts.filter(part => part.category.name === activeCat)} handleAddToLayers={handleAddToLayers}/>
				<Preview layers={layers}/>
				<LayerList layers={layers}/>
				<ActionButtons />
			</div>
		</div>
	);
}
