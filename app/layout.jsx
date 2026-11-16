import './globals.css';
import { CyberShieldProvider } from '../src/context/CyberShieldContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export const metadata = { title: 'CyberShield | Safer accounts start here', description: 'Simple, practical guidance to protect your accounts and recover access.' };

export default function RootLayout({ children }) {
  return <html lang="en"><body><CyberShieldProvider><Navbar /><main>{children}</main><Footer /></CyberShieldProvider></body></html>;
}
