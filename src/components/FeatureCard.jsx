import Link from 'next/link';
import { ArrowUpRight, BookOpenCheck, Fingerprint, LockKeyhole, Radar } from 'lucide-react';
const icons = { assessment: Radar, recovery: BookOpenCheck, privacy: Fingerprint, incidents: LockKeyhole };
export default function FeatureCard({ item }) { const Icon = icons[item.icon] || Radar; return <Link className="feature-card" href={item.href}><span className="icon-box"><Icon size={21} /></span><span className="eyebrow">{item.tag}</span><h3>{item.title}</h3><p>{item.description}</p><span className="card-link">Explore <ArrowUpRight size={16} /></span></Link>; }
