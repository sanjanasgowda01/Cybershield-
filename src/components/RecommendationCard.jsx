import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
export default function RecommendationCard({ item, index }) { return <article className="recommendation-card"><span className="recommend-index">0{index + 1}</span><div><h3>{item.title || item}</h3><p>{item.description || 'Take a few minutes to review this setting in the official account website.'}</p></div>{item.href ? <Link href={item.href} aria-label={`Open ${item.title}`}><ArrowUpRight size={18} /></Link> : <Check size={18} className="success" />}</article>; }
