import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/components/authContext';

export const metadata: Metadata = {
    title: 'Hotel System',
    description: 'Hotel System',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='es'>
            <body>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
