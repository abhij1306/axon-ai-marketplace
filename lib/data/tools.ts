export interface AITool {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  url?: string;
  logoUrl?: string; // Optional logo URL to display in header
  isSolution?: boolean;
  rating?: number; // 0 to 5
  reviewCount?: number;
  sponsored?: boolean;
}

// Real World AI Tools - Comprehensive List
export const toolsData: AITool[] = [
  // Text & Chat
  {
    id: '1',
    name: 'ChatGPT',
    category: 'Text Analysis',
    description: 'OpenAI\'s advanced conversational AI model for dialogue and text generation.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=ChatGPT&background=10a37f&color=fff&size=128&bold=true',
    url: 'https://chatgpt.com',
    rating: 4.9,
    reviewCount: 45200,
    sponsored: true
  },
  {
    id: '2',
    name: 'Claude',
    category: 'Text Analysis',
    description: 'Anthropic\'s helpful and harmless AI assistant for summarization and writing.',
    imageUrl: 'https://images.unsplash.com/photo-1655635949312-426c4f833a9b?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Claude&background=d97757&color=fff&size=128&bold=true',
    url: 'https://claude.ai',
    rating: 4.8,
    reviewCount: 8400
  },
  {
    id: '3',
    name: 'Gemini',
    category: 'Text Analysis',
    description: 'Google\'s most capable AI model with multimodal understanding.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Gemini&background=4285f4&color=fff&size=128&bold=true',
    url: 'https://gemini.google.com',
    rating: 4.7,
    reviewCount: 12300
  },
  {
    id: '4',
    name: 'Perplexity',
    category: 'Text Analysis',
    description: 'AI-powered search engine that provides accurate answers with sources.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Perplexity&background=20808d&color=fff&size=128&bold=true',
    url: 'https://www.perplexity.ai',
    rating: 4.6,
    reviewCount: 3200
  },

  // Image Generation
  {
    id: '5',
    name: 'Midjourney',
    category: 'Image Generation',
    description: 'Create stunning, realistic visuals from text descriptions.',
    imageUrl: 'https://images.unsplash.com/photo-1686191128892-3b3790103732?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Midjourney&background=000&color=fff&size=128&bold=true',
    url: 'https://www.midjourney.com',
    rating: 4.9,
    reviewCount: 22100
  },
  {
    id: '6',
    name: 'DALL-E',
    category: 'Image Generation',
    description: 'OpenAI\'s image generation model for creative visual content.',
    imageUrl: 'https://images.unsplash.com/photo-1677442135136-19259188d753?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=DALL-E&background=10a37f&color=fff&size=128&bold=true',
    url: 'https://openai.com/dall-e',
    rating: 4.7,
    reviewCount: 18500
  },
  {
    id: '7',
    name: 'Stable Diffusion',
    category: 'Image Generation',
    description: 'Open-source text-to-image model by Stability AI.',
    imageUrl: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=SD&background=6c5ce7&color=fff&size=128&bold=true',
    url: 'https://stability.ai',
    rating: 4.6,
    reviewCount: 15600
  },
  {
    id: '8',
    name: 'Leonardo.ai',
    category: 'Image Generation',
    description: 'AI-powered creative tools for game assets and artwork.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Leonardo&background=ff6b6b&color=fff&size=128&bold=true',
    url: 'https://leonardo.ai',
    rating: 4.5,
    reviewCount: 5400
  },
  {
    id: '9',
    name: 'Playground AI',
    category: 'Image Generation',
    description: 'Free AI image creator with advanced editing capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1632363198896-e2a275f9227d?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Playground&background=8e44ad&color=fff&size=128&bold=true',
    url: 'https://playground.com',
    rating: 4.4,
    reviewCount: 3800
  },
  {
    id: '10',
    name: 'Canva AI',
    category: 'Image Generation',
    description: 'AI-powered design tools integrated directly into Canva.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Canva&background=00c4cc&color=fff&size=128&bold=true',
    url: 'https://www.canva.com',
    rating: 4.8,
    reviewCount: 50000
  },

  // Video Creation
  {
    id: '11',
    name: 'Runway',
    category: 'Video Creation',
    description: 'Next-generation creative suite for video editing and generation.',
    imageUrl: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Runway&background=333&color=fff&size=128&bold=true',
    url: 'https://runwayml.com',
    rating: 4.7,
    reviewCount: 4200
  },
  {
    id: '12',
    name: 'Synthesia',
    category: 'Video Creation',
    description: 'Create AI avatars and videos from text in minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Synthesia&background=2d3436&color=fff&size=128&bold=true',
    url: 'https://www.synthesia.io',
    rating: 4.6,
    reviewCount: 3100
  },
  {
    id: '13',
    name: 'ElevenLabs',
    category: 'Video Creation',
    description: 'The most realistic text-to-speech and voice cloning software.',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=11Labs&background=000&color=fff&size=128&bold=true',
    url: 'https://elevenlabs.io',
    rating: 4.9,
    reviewCount: 6500
  },
  {
    id: '14',
    name: 'Descript',
    category: 'Video Creation',
    description: 'All-in-one video and podcast editing powered by AI.',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Descript&background=4a5568&color=fff&size=128&bold=true',
    url: 'https://www.descript.com',
    rating: 4.5,
    reviewCount: 2900
  },

  // Productivity
  {
    id: '15',
    name: 'Notion AI',
    category: 'Productivity',
    description: 'Write, plan, and organize with AI inside your notes.',
    imageUrl: 'https://images.unsplash.com/photo-1680795455806-05459392c6b4?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Notion&background=000&color=fff&size=128&bold=true',
    url: 'https://www.notion.so/product/ai',
    rating: 4.8,
    reviewCount: 18000
  },
  {
    id: '16',
    name: 'Grammarly',
    category: 'Productivity',
    description: 'AI writing assistance for clear, effective communication.',
    imageUrl: 'https://images.unsplash.com/photo-1519241047957-be3152ef05b9?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Grammarly&background=10ac84&color=fff&size=128&bold=true',
    url: 'https://www.grammarly.com',
    rating: 4.7,
    reviewCount: 85000
  },
  {
    id: '17',
    name: 'Otter.ai',
    category: 'Productivity',
    description: 'AI meeting assistant that records audio, writes notes, and summarizes.',
    imageUrl: 'https://images.unsplash.com/photo-1589254065909-b7086221d0ea?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Otter&background=2980b9&color=fff&size=128&bold=true',
    url: 'https://otter.ai',
    rating: 4.5,
    reviewCount: 5600
  },
  {
    id: '18',
    name: 'Mem',
    category: 'Productivity',
    description: 'Self-organizing workspace powered by AI.',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Mem&background=6c5ce7&color=fff&size=128&bold=true',
    url: 'https://get.mem.ai',
    rating: 4.3,
    reviewCount: 1200
  },
  {
    id: '19',
    name: 'Superhuman',
    category: 'Productivity',
    description: 'The fastest email experience with AI-powered features.',
    imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Superhuman&background=000&color=fff&size=128&bold=true',
    url: 'https://superhuman.com',
    rating: 4.6,
    reviewCount: 3400
  },

  // Development
  {
    id: '20',
    name: 'GitHub Copilot',
    category: 'Development',
    description: 'Your AI pair programmer that suggests code as you type.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=GitHub&background=24292e&color=fff&size=128&bold=true',
    url: 'https://github.com/features/copilot',
    rating: 4.6,
    reviewCount: 12000
  },
  {
    id: '21',
    name: 'Cursor',
    category: 'Development',
    description: 'AI-first code editor built for productivity.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Cursor&background=000&color=fff&size=128&bold=true',
    url: 'https://cursor.com',
    rating: 4.8,
    reviewCount: 5200
  },
  {
    id: '22',
    name: 'Tabnine',
    category: 'Development',
    description: 'AI code completion that works with your entire codebase.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Tabnine&background=4a90e2&color=fff&size=128&bold=true',
    url: 'https://www.tabnine.com',
    rating: 4.4,
    reviewCount: 3800
  },
  {
    id: '23',
    name: 'Codeium',
    category: 'Development',
    description: 'Free AI-powered code acceleration toolkit.',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Codeium&background=09b6a2&color=fff&size=128&bold=true',
    url: 'https://codeium.com',
    rating: 4.5,
    reviewCount: 2100
  },
  {
    id: '24',
    name: 'Replit',
    category: 'Development',
    description: 'Build software faster with AI-powered code enhancement.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Replit&background=303952&color=fff&size=128&bold=true',
    url: 'https://replit.com',
    rating: 4.5,
    reviewCount: 4100
  },
  {
    id: '25',
    name: 'v0 by Vercel',
    category: 'Development',
    description: 'Generate UI with simple text prompts and copy paste the code.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=v0&background=000&color=fff&size=128&bold=true',
    url: 'https://v0.dev',
    rating: 4.7,
    reviewCount: 1850
  },
  {
    id: '26',
    name: 'Hugging Face',
    category: 'Development',
    description: 'The AI community building the future. Build, train and deploy models.',
    imageUrl: 'https://images.unsplash.com/photo-1649363842144-8c82387137f8?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=HF&background=ffa502&color=fff&size=128&bold=true',
    url: 'https://huggingface.co',
    rating: 4.9,
    reviewCount: 9500
  },

  // Marketing
  {
    id: '27',
    name: 'Jasper',
    category: 'Marketing',
    description: 'AI content generator built specifically for marketing teams and copywriters.',
    imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e8432b?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Jasper&background=ff4d4d&color=fff&size=128&bold=true',
    url: 'https://www.jasper.ai',
    rating: 4.7,
    reviewCount: 12500
  },
  {
    id: '28',
    name: 'Copy.ai',
    category: 'Marketing',
    description: 'Generate high-quality copy for email, social media, and web.',
    imageUrl: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Copy.ai&background=444&color=fff&size=128&bold=true',
    url: 'https://www.copy.ai',
    rating: 4.5,
    reviewCount: 8900
  },
  {
    id: '29',
    name: 'Writesonic',
    category: 'Marketing',
    description: 'AI writer for creating SEO-optimized content at scale.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Writesonic&background=8e44ad&color=fff&size=128&bold=true',
    url: 'https://writesonic.com',
    rating: 4.4,
    reviewCount: 6200
  },
  {
    id: '30',
    name: 'Lately',
    category: 'Marketing',
    description: 'AI-powered social media content generator and scheduler.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Lately&background=e74c3c&color=fff&size=128&bold=true',
    url: 'https://www.lately.ai',
    rating: 4.3,
    reviewCount: 1800
  }
];

// Enterprise Solutions (Marketplace)
export const solutionsData: AITool[] = [
  // HR & Recruitment
  {
    id: 'sol-hr-1',
    name: 'Workday AI',
    category: 'HR',
    description: 'Enterprise HR automation for talent management and recruitment.',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Workday&background=0051a3&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.workday.com',
    rating: 4.4,
    reviewCount: 1530
  },
  {
    id: 'sol-hr-2',
    name: 'Paradox',
    category: 'HR',
    description: 'Conversational recruiting software to automate hiring tasks.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Paradox&background=0984e3&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.paradox.ai',
    rating: 4.6,
    reviewCount: 420
  },
  {
    id: 'sol-hr-3',
    name: 'Eightfold AI',
    category: 'HR',
    description: 'Talent intelligence platform for hiring and workforce planning.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Eightfold&background=6c5ce7&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://eightfold.ai',
    rating: 4.5,
    reviewCount: 680
  },

  // Finance
  {
    id: 'sol-fin-1',
    name: 'Intuit AI',
    category: 'Finance',
    description: 'Financial automation for automated bookkeeping and forecasting.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Intuit&background=2c3e50&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.intuit.com',
    rating: 4.3,
    reviewCount: 8900
  },
  {
    id: 'sol-fin-2',
    name: 'Brex',
    category: 'Finance',
    description: 'AI-driven spend management and corporate card solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Brex&background=ffa502&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.brex.com',
    rating: 4.7,
    reviewCount: 3100
  },
  {
    id: 'sol-fin-3',
    name: 'Ramp',
    category: 'Finance',
    description: 'Finance automation platform that saves time and money.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Ramp&background=000&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://ramp.com',
    rating: 4.8,
    reviewCount: 2400
  },

  // Sales & Marketing
  {
    id: 'sol-sales-1',
    name: 'Salesforce Einstein',
    category: 'Sales',
    description: 'CRM with built-in AI for predictive sales and customer insights.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Salesforce&background=1798c1&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.salesforce.com/products/einstein/overview/',
    rating: 4.5,
    reviewCount: 25000
  },
  {
    id: 'sol-sales-2',
    name: 'Gong',
    category: 'Sales',
    description: 'Revenue intelligence platform that captures customer interactions.',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Gong&background=ff6b6b&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.gong.io',
    rating: 4.7,
    reviewCount: 3200
  },
  {
    id: 'sol-mkt-1',
    name: 'HubSpot AI',
    category: 'Marketing',
    description: 'Connected customer platform with AI-powered marketing automation.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=HubSpot&background=ff7a59&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.hubspot.com',
    rating: 4.6,
    reviewCount: 18000
  },
  {
    id: 'sol-mkt-2',
    name: 'Drift',
    category: 'Marketing',
    description: 'Conversational marketing platform powered by AI chatbots.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Drift&background=2e86de&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.drift.com',
    rating: 4.4,
    reviewCount: 5600
  },

  // Consulting & Bespoke
  {
    id: 'sol-consult-1',
    name: 'Axon Bespoke',
    category: 'Consulting',
    description: 'Custom implementation of private LLMs for your enterprise data.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Axon&background=6c5ce7&color=fff&size=128&bold=true',
    isSolution: true,
    url: '#contact',
    rating: 5.0,
    reviewCount: 124
  },
  {
    id: 'sol-consult-2',
    name: 'AutoGPT Enterprise',
    category: 'Consulting',
    description: 'Autonomous agent workflows designed for complex business logic.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=AutoGPT&background=2d3436&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://news.agpt.co/',
    rating: 4.8,
    reviewCount: 95
  },
  {
    id: 'sol-consult-3',
    name: 'LangChain',
    category: 'Consulting',
    description: 'Framework for developing applications powered by language models.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=LangChain&background=1c1c1c&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.langchain.com',
    rating: 4.7,
    reviewCount: 1200
  }
];
