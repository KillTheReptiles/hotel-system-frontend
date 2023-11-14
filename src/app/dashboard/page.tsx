'use client';
import { useAuth } from '@/components/authContext';
import React from 'react';

function Page() {
    const { user } = useAuth();
    return <div>{user?.email || 'Non user'}</div>;
}

export default Page;
