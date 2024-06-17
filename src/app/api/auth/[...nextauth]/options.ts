import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { SupabaseAdapter } from '@auth/supabase-adapter'
import { Adapter } from 'next-auth/adapters'



export const options: NextAuthOptions = {
    providers: [

       /* GitHubProvider ({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),*/

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username:", type: "text", placeholder: "your_cool_username" },
                email: { label: "Email:", type: "email", placeholder: "your_email@example.com" },
                password: { label: "Password:", type: "password", placeholder: "your_strong_password" }
                },
            async authorize(credentials) {
               // This is where we need to retrieve user data
               // to verify with credentials
               const user = {id: "42", name: "Dave", password: "nextauth", email: "dave@gmail.com"} 

               if (credentials?.username === user.name && credentials?.password === 
                user.password) {
                    return user
                } else {
                    return null
                }
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          })
    ],

    session: {
        strategy: 'jwt'
    },

    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
      }) as Adapter,
    

  
}