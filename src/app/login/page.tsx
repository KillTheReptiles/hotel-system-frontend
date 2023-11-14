'use client';
import { useAuth } from '@/components/authContext';
import { User } from '@/types/user';
import { UserCredential } from 'firebase/auth';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();
    const authContext = useAuth();
    const [UserForm, setUserForm] = useState<User>({
        username: '',
        password: '',
    });
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response: UserCredential = await authContext.signIn(
                UserForm.username,
                UserForm.password
            );
            // if response
            console.log(response);
            alert(`User login with email: ${response.user.email}`);
            router.push('/dashboard');
    } catch (Error: any) {
            switch (Error.code) {
                case 'auth/invalid-email':
                    alert('Invalid email');
                    break;
                case 'auth/email-already-in-use':
                    alert('Email already in use');
                    break;
                case 'auth/weak-password':
                    alert('Weak password');
                    break;
                case 'auth/invalid-password':
                    alert('Invalid password');
                    break;
                case 'auth/invalid-username':
                    alert('Invalid username');
                    break;
                default:
                    alert('Unknown error');
                    break;
            }
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setUserForm((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <div>
      <h1>Login</h1>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <input
                    type='text'
                    name='username'
                    id='username'
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type='text'
                    name='password'
                    id='password'
                    typeof='password'
                    onChange={(e) => handleInputChange(e)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Page;
