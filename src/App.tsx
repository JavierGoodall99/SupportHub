import React, { useState, useEffect } from 'react';
import Home from './Home';
import RequestPage from './Request/RequestPage';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();



  // Force the user to log in before accessing the home page

  // useEffect(() => {
  //   if (location.pathname === '/' && !isAuthenticated) {
  //     navigate('/Login');
  //   }
  // }, [location.pathname, isAuthenticated, navigate]);


  


  // Hide the NavBar on the Login page
  const showNavBar = location.pathname !== '/Login';

  return (
    <div className="App">
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RequestPage" element={<RequestPage />} />
        {/* <Route path="/RequestPage" element={isAuthenticated ? <RequestPage /> : <Navigate to="/Login" />} /> */}
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