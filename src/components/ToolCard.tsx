import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import '../styles/ToolCard.scss';

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    url?: string;
    logoUrl?: string;
    isSolution?: boolean;
    rating?: number;
    reviewCount?: number;
    sponsored?: boolean;
  };
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const displayImage = tool.logoUrl || tool.imageUrl;
  const rating = tool.rating || 4.5;
  const reviews = tool.reviewCount ? tool.reviewCount.toLocaleString() : '1,200';

  return (
    <div className="tool-card-wrapper">
      <a
        href={tool.url || '#'}
        target={tool.url ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="tool-card g2-style"
      >
        <div className="card-header">
          <div className="logo-container">
            <img src={displayImage} alt={`${tool.name} logo`} loading="lazy" />
          </div>
          <div className="title-area">
            <h3>{tool.name}</h3>
            <div className="rating-row">
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill={star <= rating ? "#FFB800" : "none"}
                    stroke={star <= rating ? "#FFB800" : "#9CA3AF"}
                    style={{ marginRight: '2px' }}
                  />
                ))}
              </div>
              <span className="review-count">({reviews})</span>
            </div>
          </div>
        </div>

        <div className="tool-info">
          <div className={`tool-category ${tool.isSolution ? 'solution' : ''}`}>
            {tool.category}
          </div>
          <p className="tool-description">{tool.description}</p>

          <div className="card-footer">
            <button className="btn btn-secondary visit-btn">
              Visit Website <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </a>
      {/* Optional Sponsored Badge */}
      {tool.sponsored && (
        <div className="sponsored-badge">
          Top 50
        </div>
      )}
    </div>
  );
};

export default ToolCard;
