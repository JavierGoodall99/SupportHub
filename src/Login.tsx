import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import { login } from './MSALjs/AuthServices';

const Login: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await login();
      // Check if login was successful
      if (result) {
        // Redirect to the desired page after successful login
        // Replace '/profile' with the actual route for the profile page
        window.location.href = '/profile';
      } else {
        // Handle login failure, show an error message, etc.
        console.log('Login failed.');
      }
    } catch (error) {
      console.log('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <body>
      <h1 className="text-center animate__animated animate__zoomIn mb- FontSize"></h1>
      <br /><br />
      <div className="container1">
        <div className="row">
          <div className="col-md-6 image1"></div>
          <div className="col-md-6 right">
            <div className="inputText">
              <form onSubmit={handleSubmit}>
                <div>
                  <h2 className="text-center">Hello There!</h2>
                  {/* <Input
                    size="lg"
                    placeholder="Large"
                    underlined
                    labelPlaceholder="Email"
                    color="primary"
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  /> */}
                </div>
                <br /><br />
                <div>
                  {/* <Input
                    size="lg"
                    placeholder="Large"
                    underlined
                    labelPlaceholder="Password"
                    color="primary"
                    type="password"
                    className="input"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                  /> */}
                </div>
                <br /><br />
                <div>
                  <Button className="submit" disabled={isLoading} type="submit">
                    {isLoading ? 'Loading...' : 'Sign In'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
