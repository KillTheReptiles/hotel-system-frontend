'use client';
import { auth } from '@/firebase/firebase';
import {
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContext {
    signUp: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    user: User | null;
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
    const [user, setuser] = useState<User | null>(null);
    const signUp = (
        email: string,
        password: string
    ): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (
        email: string,
        password: string
    ): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser);
        });
    }, []);
    return (
        <authContext.Provider value={{ signUp, signIn, user }}>
            {children}
        </authContext.Provider>
    );
}
