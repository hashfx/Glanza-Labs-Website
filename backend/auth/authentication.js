import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verify } from 'bcryptjs';
import User from '../../../models/user'; // Replace with your user model path

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                const { email, password } = credentials;

                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error('Invalid email or password');
                }

                const isValidPassword = await verify(password, user.password);
                if (!isValidPassword) {
                    throw new Error('Invalid email or password');
                }

                return user;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET, // Replace with a strong secret
    session: {
        strategy: 'jwt',
        maxAge: 30 * 60, // 30 minutes
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET, // Same secret for signing
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
});
