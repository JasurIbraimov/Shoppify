import './globals.css'

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: "Shoppify",
    description: "NextJS learning app for buy and sell products",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
