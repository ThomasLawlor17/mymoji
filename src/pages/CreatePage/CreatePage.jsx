import { Component } from "react";
// import { Link } from 'react-router-dom'

// css
import './CreatePage.css'


// Componenets
import PartsList from "../../components/PartsList/PartsList";
import Preview from "../../components/Preview/Preview";
import LayerList from "../../components/LayerList/LayerList";
import ActionButtons from "../../components/ActionButtons/ActionButtons";

export default class CreatePage extends Component {

    render() {
        return (
            <div className="CreatePage">
                <h1>Create Page</h1>
                <div className="CreatePage-grid">
                <PartsList />
                <Preview />
                <LayerList />
                <ActionButtons />
                </div>
            </div>
        )
    }
}

