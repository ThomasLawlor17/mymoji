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
import UserLogOut from "../../components/UserLogOut/UserLogOut";

export default function CreatePage(user, setUser) {
	const [parts, setParts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const [layers, setLayers] = useState(null)

    useEffect(() => {
        console.log('useEffect was called')
        async function fetchParts() {
            console.log('hello from fetchParts')
            const parts = await fetch('/api/parts').then(res => res.json())
            console.log('PARTS: ', parts)
            setParts(parts)

            setCategories(parts.reduce((cats, part) => {
                const cat = part.category.name
                return cats.includes(cat) ? cats : [...cats, cat]
            }, []))
            setActiveCat(parts[52].category.name)

        }
        fetchParts()
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
		<main className="CreatePage">
            <nav>
                <Link to='/community'>Community</Link>
                <Link to='/emojis'>My-Emojis</Link>
                <UserLogOut user={user} setUser={setUser} />
            </nav>
                <CategoryList categories={categories} activeCat={activeCat} setActiveCat={setActiveCat} />
				<PartsList parts={parts.filter(part => part.category.name === activeCat)} handleAddToLayers={handleAddToLayers}/>
				<Preview layers={layers}/>
				<LayerList layers={layers}/>
				<ActionButtons />
		</main>
	);
}
