import { Component } from 'react';
import './App.css';

// Pages
import CreatePage from './pages/CreatePage/CreatePage';

class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="App">
        <CreatePage />
      </div>
    );
  }
}

export default App;
