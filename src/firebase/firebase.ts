// Import the functions you need from the SDKs you need
'use client';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './constants';
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
