import React, { useState } from 'react';
import { TextInput } from '../../components/inputs/TextInput/TextInput';
import styles from './AuthPage.module.scss';
import ButtonPrimary from '../buttons/buttonPrimary';

const AuthPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleSignIn = () => {
      if (username === '' || password.length < 8) {
        setError('Login cannot be empty and the password must contain at least 8 characters.');
        setSuccess('');
        return;
      }
  
      console.log('Signing in with', { username, password });
      setSuccess('Entered successfully!');
      setError('');
    };
  
    const handleCreateAccount = () => {
      if (username === '' || password.length < 8) {
        setError('Login cannot be empty and the password must contain at least 8 characters.');
        setSuccess('');
        return;
      }
  
      console.log('Creating account for', { username, password });
      setSuccess('Account created successfully!');
      setError('');
    };
  
    return (
      <div className={styles.authPage}>
        <div className={styles.authCard}>
          <h2>Sign In</h2>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            error={error}
            onChange={setUsername}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            error={error}
            onChange={setPassword}
          />
          

          <ButtonPrimary onClick={handleSignIn}>Sign In</ButtonPrimary>
          <ButtonPrimary onClick={handleCreateAccount}>Create Account</ButtonPrimary>
          
          {error && <span className={styles.errorMessage}>{error}</span>}
          {success && <span className={styles.successMessage}>{success}</span>}
        </div>
      </div>
    );
  };
  
  export default AuthPage;
