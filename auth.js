
import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';

async function getUser(email) {
    const sql = neon(`${process.env.DATABASE_URL}`);   //connect to db
    try {
        // Use proper parameterized query format for neon
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;
        return user[0];
    }
    catch(err) {
        console.error(err);
        return null;
    }
}

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig, 
    providers: [
        Credentials({
            async authorize(credentials) {
                const email = credentials?.email;
                const password = credentials?.password;
                
                const user = await getUser(email);
                
                if(!user) return null;
                
                // Verify password
                const passwordMatch = await bcrypt.compare(password, user.password);
                
                if (passwordMatch) {
                    // Return user object excluding sensitive data
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    };
                }
                
                return null;
            }
        })
    ]
})