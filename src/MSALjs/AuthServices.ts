import { PublicClientApplication, AuthenticationResult } from '@azure/msal-browser';
import { msalConfig } from './MsalConfig';

const msalInstance = new PublicClientApplication(msalConfig);

export const login = async (): Promise<AuthenticationResult | null> => {
  try {
    const loginResult = await msalInstance.loginPopup();
    return loginResult;
  } catch (error) {
    console.log('Login error:', error);
    return null;
  }
};

export const logout = (): void => {
  msalInstance.logout();
};

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length === 0) {
      return null;
    }
    const silentResult = await msalInstance.acquireTokenSilent({
      scopes: ['openid', 'profile', 'email', 'YOUR_API_SCOPES'],
      account: accounts[0],
    });
    return silentResult.accessToken;
  } catch (error) {
    console.log('Access token error:', error);
    return null;
  }
};
