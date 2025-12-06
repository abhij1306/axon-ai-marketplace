// src/components/ToolCard.tsx
import React from 'react';
import '../styles/ToolCard.scss';

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
  };
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="tool-card neumorphic-flat">
      <div className="tool-image">
        <img src={tool.imageUrl} alt={tool.name} />
      </div>
      <div className="tool-info">
        <h3>{tool.name}</h3>
        <p className="tool-category">{tool.category}</p>
        <p className="tool-description">{tool.description}</p>
        <button className="tool-button neumorphic-flat">Learn More</button>
      </div>
    </div>
  );
};

export default ToolCard;
