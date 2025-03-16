'use server';

import { signIn } from '../auth';
import { AuthError } from 'next-auth';


export async function login(currentState, formData) {

  try {
    
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Call signIn with the correct parameters
    await signIn('credentials', {
      email,
      password,
      redirect: false, // Important to prevent automatic redirects
    });
    
   
  } catch (error) {
   
    
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signup() {
  // Your signup logic here
}