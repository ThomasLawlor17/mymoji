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
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M11.4049 3.33903C17.8849 2.06403 19.8579 4.60403 23.0599 3.42303C26.2619 2.24203 23.1529 6.24303 22.3149 6.93103C21.4749 7.61903 14.1739 11.74 11.0079 10.229C7.84194 8.71803 7.82594 4.04303 11.4049 3.33903Z" fill="#5C913B"/>
<path d="M15.001 16C14.697 16 14.396 15.862 14.2 15.6C13.513 14.684 12.892 13.645 12.235 12.544C9.96697 8.74902 7.39597 4.44602 0.78297 2.97602C0.24397 2.85602 -0.0960299 2.32202 0.0239701 1.78302C0.14397 1.24302 0.67797 0.905019 1.21697 1.02402C8.67097 2.68002 11.599 7.58102 13.952 11.519C14.582 12.573 15.176 13.568 15.8 14.4C16.132 14.842 16.042 15.469 15.6 15.8C15.42 15.935 15.21 16 15.001 16Z" fill="#77B255"/>
<path d="M34.3 31.534C34.302 31.517 34.297 31.506 34.297 31.491C37.071 26.156 36.944 16.378 30.951 10.384C25.15 4.58401 17.271 4.56301 12.184 6.31701C10.605 6.93101 9.267 6.38301 8.369 7.28201C7.488 8.16301 8.018 10.001 7.655 11.101C4.486 16.303 4.25 24.126 10.343 30.218C15.305 35.18 20.781 37.06 30.323 35.071C30.325 35.069 30.328 35.07 30.331 35.069C31.479 34.851 33.281 35.592 33.897 34.975C34.982 33.89 34.206 32.617 34.3 31.534Z" fill="#FFCC4D"/>
<path d="M8.20802 6.583C8.20802 6.583 3.93802 5.993 1.35102 11.182C-1.23598 16.37 1.93302 20.307 1.64102 23.835C1.34802 27.365 3.20702 25.1 4.26202 23.39C5.31702 21.68 8.49202 18.495 9.20002 14.121C9.90702 9.745 9.13002 7.663 8.20802 6.583Z" fill="#77B255"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="36" height="36" fill="white"/>
</clipPath>
</defs>
</svg>
    </main>
  );
}