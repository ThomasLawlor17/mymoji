// Packages
import React, { useState } from 'react';
import { getUser } from './utilities/users-service'
import { Routes, Route, Navigate } from 'react-router-dom'

// css
import './App.css';

// Pages
import AuthPage from './pages/AuthPage/AuthPage'
import CreatePage from './pages/CreatePage/CreatePage';

export default function App(props) {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/orders/new">
            <CreatePage user={user} setUser={setUser} />
          </Route>
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }

    </main>
  );
}