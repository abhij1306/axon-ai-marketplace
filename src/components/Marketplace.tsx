import React from 'react';
import ToolCard from './ToolCard';
import { toolsData, solutionsData } from '../data/tools';
import '../styles/Marketplace.scss';

interface MarketplaceProps {
  selectedToolCategory: string;
  setSelectedToolCategory: (category: string) => void;
  selectedSolutionCategory: string;
  setSelectedSolutionCategory: (category: string) => void;
  searchTerm: string;
}

const Marketplace: React.FC<MarketplaceProps> = ({
  selectedToolCategory,
  setSelectedToolCategory,
  selectedSolutionCategory,
  setSelectedSolutionCategory,
  searchTerm
}) => {

  // Specific Categories for Tools
  const toolCategories = [
    { name: 'All', icon: '◈' },
    { name: 'Text Analysis', icon: '📝' },
    { name: 'Image Generation', icon: '🖼️' },
    { name: 'Video Creation', icon: '🎥' },
    { name: 'Productivity', icon: '⚡' },
    { name: 'Development', icon: '💻' },
    { name: 'Marketing', icon: '📢' },
  ];

  // Specific Categories for Solutions (Enterprise)
  const solutionCategories = [
    { name: 'All', icon: '◈' },
    { name: 'HR', icon: '👥' },
    { name: 'Finance', icon: '💰' },
    { name: 'Sales', icon: '📈' },
    { name: 'Marketing', icon: '🎯' },
    { name: 'Consulting', icon: '🤝' },
    { name: 'Security', icon: '🔒' },
  ];

  // Filter logic
  const filteredTools = toolsData.filter(tool =>
    (selectedToolCategory === 'All' || tool.category === selectedToolCategory) &&
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredSolutions = solutionsData.filter(sol =>
    (selectedSolutionCategory === 'All' || sol.category === selectedSolutionCategory) &&
    (sol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sol.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sol.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="marketplace" className="marketplace-section">
      <div className="marketplace-header fade-in-up">
        <h2>Axon AI Marketplace</h2>
        <p>Explore top-tier AI Tools or find Enterprise Solutions for your business.</p>
      </div>

      {/* Global Filter Bar (Removed here as it's now in Hero) */}


      {/* AI TOOLS SECTION */}
      <div className="section-header">
        <h3>AI Tools Registry</h3>
        <p>Generative models and productivity enhancers.</p>
      </div>

      {/* Tools Categories */}
      <div className="category-container">
        <div className="category-list">
          {toolCategories.map(cat => (
            <div
              key={cat.name}
              className={`category-item ${selectedToolCategory === cat.name ? 'active' : ''}`}
              onClick={() => setSelectedToolCategory(cat.name)}
            >
              <div className="icon">{cat.icon}</div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tool-grid">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
        {filteredTools.length === 0 && <p className="no-results">No tools found matching criteria.</p>}
      </div>


      {/* AI SOLUTIONS SECTION */}
      <div id="solutions" className="section-header" style={{ marginTop: '5rem' }}>
        <h3>Enterprise Solutions</h3>
        <p>Business-ready automation for HR, Finance, and Sales.</p>
      </div>

      {/* Solutions Categories */}
      <div className="category-container">
        <div className="category-list">
          {solutionCategories.map(cat => (
            <div
              key={cat.name}
              className={`category-item ${selectedSolutionCategory === cat.name ? 'active' : ''}`}
              onClick={() => setSelectedSolutionCategory(cat.name)}
            >
              <div className="icon">{cat.icon}</div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tool-grid">
        {filteredSolutions.map(sol => (
          <ToolCard key={sol.id} tool={sol} />
        ))}
        {filteredSolutions.length === 0 && <p className="no-results">No solutions found matching criteria.</p>}
      </div>

    </section>
  );
};

export default Marketplace;
