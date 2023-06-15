import React, { useState, useEffect } from 'react';
import { getAccessToken } from './MSALjs/AuthServices';
import './App.css';

interface ProfileProps {
  username: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ username, email }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <p className="profile-info">Username: {username}</p>
      <p className="profile-info">Email: {email}</p>
      {accessToken && <p className="profile-info">Access Token: {accessToken}</p>}
    </div>
  );
};

export default Profile;
