'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Shield, X } from 'lucide-react';
import { useState } from 'react';
const links = [['Home', '/'], ['Assessment', '/assessment'], ['Dashboard', '/dashboard'], ['Recovery', '/recovery'], ['Safety guides', '/incidents'], ['Privacy', '/privacy']];
export default function Navbar() { const path = usePathname(); const [open, setOpen] = useState(false); return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark"><Shield size={19} /></span><span>Cyber<span>Shield</span><small>PERSONAL SECURITY</small></span></Link><button className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><div className={`nav-links ${open ? 'nav-open' : ''}`}>{links.map(([label, href]) => <Link key={href} href={href} className={path === href || (href === '/recovery' && path === '/checklist') ? 'nav-active' : ''} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/assessment" onClick={() => setOpen(false)}>Check my security <span>↗</span></Link></div></nav></header>; }
