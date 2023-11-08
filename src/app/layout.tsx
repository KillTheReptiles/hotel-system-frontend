import type { Metadata } from 'next';
import './globals.css';

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
            <body>{children}</body>
        </html>
    );
}
