'use client'

import { useState, useActionState } from "react";
import { login, signup } from '@/app/lib/actions';
import styles from '../css-modules/home.module.css'


export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  

  // Use the authentication action based on the current mode (signup or login)
  const authenticate = isSignup ? signup : login;
  
  // Use the specified format for useActionState
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <section id="auth" className={styles.authSection}>
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

        <form action={formAction} className={styles.authForm}>
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
            disabled={isPending}
          >
            {isPending ? 'Processing...' : isSignup ? 'Sign Up' : 'Sign In'}
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