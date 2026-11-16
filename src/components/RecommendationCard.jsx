import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function RecommendationCard({ item, index }) {
  return (
    <article className="recommendation-card">
      <span className="recommend-index">0{index + 1}</span>
      <div>
        <div className="recommendation-heading">
          <h3>{item.title}</h3>
          <span className={`priority-label priority-${item.priority.toLowerCase()}`}>
            {item.priority} priority
          </span>
        </div>
        <p>{item.description}</p>
      </div>
      <Link href={item.href} aria-label={`Open guidance for ${item.title}`}>
        <ArrowUpRight size={18} />
      </Link>
    </article>
  );
}
