import React, { useState, useEffect } from 'react';
import Home from './Home';
import RequestPage from './Request/RequestPage';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import LoginModal from './SignUp/LoginModal';
import { getAccessToken } from './MSALjs/AuthServices';

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  const isAuthenticated = !!accessToken;

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RequestPage" element={isAuthenticated ? <RequestPage /> : <Navigate to="/Login" />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile username="" email="" /> : <Navigate to="/Login" />}
          />
          <Route path="/LoginModal" element={<LoginModal />} />
        </Routes>
    </div>
  );
}

export default App;
