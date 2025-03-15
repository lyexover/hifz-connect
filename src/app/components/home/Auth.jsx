'use client'

import { useState, useActionState } from "react";
import { login, signup } from '@/app/lib/actions';
import styles from '../css-modules/home.module.css'

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  
  // Use useActionState for login action
  const [loginState, loginAction] = useActionState(login, {
    loading: false,
    error: null,
    success: false
  });
  
  // Use useActionState for signup action
  const [signupState, signupAction] = useActionState(signup, {
    loading: false,
    error: null,
    success: false
  });
  
  // Determine which state to use based on current mode
  const currentState = isSignup ? signupState : loginState;
  const isLoading = currentState.loading;
  const errorMessage = currentState.error;
  
  const handleSubmit = async (formData) => {
    // Use the appropriate action based on current mode
    if (isSignup) {
      await signupAction(formData);
    } else {
      await loginAction(formData);
    }
    
    // Handle successful auth (redirect, show message, etc.)
    if ((isSignup && signupState.success) || (!isSignup && loginState.success)) {
      console.log("Authentication successful!");
      // You could add redirect logic here
    }
  };

  return (
    <section className={styles.authSection}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <h2>{isSignup ? 'Create an Account' : 'Welcome Back'}</h2>
          <p>{isSignup ? 'Join our community today' : 'Sign in to access your account'}</p>
        </div>

        {errorMessage && (
          <div className={styles.errorMessage}>
            {errorMessage}
          </div>
        )}

        <form action={handleSubmit} className={styles.authForm}>
          {isSignup && (
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required={isSignup}
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>

          <button 
            type="submit" 
            className={styles.authButton}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className={styles.authToggle}>
          <p>
            {isSignup
              ? 'Already have an account?'
              : "Don't have an account yet?"}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className={styles.toggleButton}
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}