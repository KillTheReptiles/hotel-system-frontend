'use client';
import { auth } from '@/firebase/firebase';
import { User } from '@/types/user';
import { UserCredential, createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext } from 'react';

interface AuthContext {
    signUp: (email: string, password: string) => Promise<UserCredential>;
}
export const authContext = createContext<AuthContext | null>(null);

export function useAuth() {
    const context = useContext(authContext);
    if (!context) throw new Error('There is no Auth provider');
    return context;
}

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const user: User = { username: 'test', password: 'test' };
    const signUp = (
        email: string,
        password: string
    ): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    return (
        <authContext.Provider value={{ signUp }}>
            {children}
        </authContext.Provider>
    );
}
