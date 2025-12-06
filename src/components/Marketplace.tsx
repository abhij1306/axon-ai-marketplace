// src/components/Marketplace.tsx
import React, { useState, useEffect } from 'react';
import ToolCard from './ToolCard';
import { toolsData } from '../data/tools'; // Importing from TypeScript file

import '../styles/Marketplace.scss';

// Define the structure of an AI Tool
interface AITool {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredTools, setFilteredTools] = useState<AITool[]>([]);

  // Get all unique categories from the tools data
  const categories: string[] = ['All', ...Array.from(new Set(toolsData.map(tool => tool.category)))];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredTools(toolsData);
    } else {
      setFilteredTools(toolsData.filter(tool => tool.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="marketplace" className="marketplace-section">
      <div className="marketplace-header">
        <h2>Discover AI Solutions</h2>
        <p>Explore a curated selection of AI tools to amplify your business.</p>
      </div>

      <div className="category-filters neumorphic-flat">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button neumorphic-button ${selectedCategory === category ? 'active neumorphic-pressed' : 'neumorphic-flat'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="tool-grid">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
