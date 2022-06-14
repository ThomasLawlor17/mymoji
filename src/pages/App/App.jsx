// Packages
import React, { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import { Routes, Route, Navigate } from 'react-router-dom'

// css
import './App.css';

// Pages
import AuthPage from '../AuthPage/AuthPage';
import CreatePage from '../CreatePage/CreatePage';
import ProfilePage from '../ProfilePage/ProfilePage'
import CommunityPage from '../CommunityPage/CommunityPage'


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/emojis/new" element={<CreatePage user={user} setUser={setUser} />} />
          <Route path='/emojis' element={<ProfilePage user={user} setUser={setUser} />}/>
          <Route path='/community' element={<CommunityPage user={user} setUser={setUser} />} />
          <Route path='*' element={<Navigate to='/emojis' replace />} />
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}