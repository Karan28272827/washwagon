import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { sendGoogleAuthCode } from '../api'; 

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    flow: 'auth-code', 
    
    onSuccess: async (codeResponse) => {
      console.log('Received auth code:', codeResponse.code);
      try {
        const response = await sendGoogleAuthCode(codeResponse.code);
        
        // --- HANDLE SUCCESSFUL LOGIN ---
        console.log('Backend response:', response.data);
        const { access, refresh } = response.data;
        
        // Store tokens securely (e.g., in localStorage or context)
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        // Redirect user or update UI state to logged-in
        window.location.href = '/dashboard'; // Example redirect

      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: (error) => {
      console.error('Google Login Error:', error);
    },
  });

  return (
    <button onClick={() => login()}>
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;