'use server';

import { signIn } from '../auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';

export async function login(currentState, formData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    
    redirect('/home');
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

async function checkEmailExistance(email) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const response = await sql`SELECT * FROM users WHERE email = ${email}`;
    return response.length > 0;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function signup(currentState, formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  const sql = neon(`${process.env.DATABASE_URL}`);

  // Check if email already exists
  const emailExists = await checkEmailExistance(email);
  if (emailExists === null) return 'Error checking email.';
  if (emailExists) return 'Email already in use.';

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert new user into the database
  try {
    await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})`;
  } catch (err) {
    console.log(err);
    return 'Error creating user.';
  }

  // Automatically sign in the user
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent default redirect
    });
    redirect('/home'); // Redirect after successful sign-in
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials after signup.';
        default:
          return 'Error signing in after signup.';
      }
    }
    throw error;
  }
}