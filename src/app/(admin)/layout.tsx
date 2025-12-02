import { Outfit } from 'next/font/google';
import '@/src/app/(admin)/globals.css';

import { SidebarProvider } from '@/src/app/(admin)/context/SidebarContext';
import { ThemeProvider } from '@/src/app/(admin)/context/ThemeContext';

const outfit = Outfit({
    subsets: ["latin"]
});
export default function AdminRootLayout({
    children,
}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${outfit.className} dark:bg-gray-900`}>
                <ThemeProvider>
                    <SidebarProvider>
                        {children}
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}