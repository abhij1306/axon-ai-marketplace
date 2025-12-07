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

// Real World AI Tools
export const toolsData: AITool[] = [
  // Text & Chat
  {
    id: '1',
    name: 'ChatGPT',
    category: 'Text Analysis',
    description: 'OpenAI\'s advanced conversational AI model for dialogue and text generation.',
    imageUrl: 'https://images.unsplash.com/photo-1662947231454-e741369527ec?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=ChatGPT&background=10a37f&color=fff&size=128&bold=true',
    url: 'https://chat.openai.com',
    rating: 4.9,
    reviewCount: 45200,
    sponsored: true
  },
  {
    id: '2',
    name: 'Jasper',
    category: 'Marketing',
    description: 'AI content generator built specifically for marketing teams and copywriters.',
    imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e8432b?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Jasper&background=ff4d4d&color=fff&size=128&bold=true',
    url: 'https://www.jasper.ai',
    rating: 4.7,
    reviewCount: 12500
  },
  {
    id: '3',
    name: 'Claude',
    category: 'Text Analysis',
    description: 'Anthropic\'s helpful and harmless AI assistant for summarization and writing.',
    imageUrl: 'https://images.unsplash.com/photo-1655635949312-426c4f833a9b?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Claude&background=d97757&color=fff&size=128&bold=true',
    url: 'https://www.anthropic.com/claude',
    rating: 4.8,
    reviewCount: 3400
  },
  {
    id: '4',
    name: 'Copy.ai',
    category: 'Marketing',
    description: 'Generate high-quality copy for email, social media, and web.',
    imageUrl: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Copy.ai&background=444&color=fff&size=128&bold=true',
    url: 'https://www.copy.ai',
    rating: 4.5,
    reviewCount: 8900
  },

  // Image Generation
  {
    id: '5',
    name: 'Midjourney',
    category: 'Image Generation',
    description: 'Create stunning, realistic visuals from text descriptions.',
    imageUrl: 'https://images.unsplash.com/photo-1686191128892-3b3790103732?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Midjourney&background=000&color=fff&size=128&bold=true',
    url: 'https://www.midjourney.com',
    rating: 4.9,
    reviewCount: 22100
  },
  {
    id: '6',
    name: 'Stable Diffusion',
    category: 'Image Generation',
    description: 'Open-source text-to-image model by Stability AI.',
    imageUrl: 'https://images.unsplash.com/photo-1677442135136-19259188d753?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=SD&background=6c5ce7&color=fff&size=128&bold=true',
    url: 'https://stability.ai',
    rating: 4.6,
    reviewCount: 15600
  },
  {
    id: '7',
    name: 'Canva Magic',
    category: 'Image Generation',
    description: 'AI-powered design tools integrated directly into Canva.',
    imageUrl: 'https://images.unsplash.com/photo-1632363198896-e2a275f9227d?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Canva&background=00c4cc&color=fff&size=128&bold=true',
    url: 'https://www.canva.com',
    rating: 4.8,
    reviewCount: 50000
  },

  // Video & Audio
  {
    id: '8',
    name: 'Runway',
    category: 'Video Creation',
    description: 'Next-generation creative suite for video editing and generation.',
    imageUrl: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Runway&background=333&color=fff&size=128&bold=true',
    url: 'https://runwayml.com',
    rating: 4.7,
    reviewCount: 4200
  },
  {
    id: '9',
    name: 'Synthesia',
    category: 'Video Creation',
    description: 'Create AI avatars and videos from text in minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Synthesia&background=2d3436&color=fff&size=128&bold=true',
    url: 'https://www.synthesia.io',
    rating: 4.6,
    reviewCount: 3100
  },
  {
    id: '10',
    name: 'ElevenLabs',
    category: 'Video Creation',
    description: 'The most realistic text-to-speech and voice cloning software.',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=11Labs&background=000&color=fff&size=128&bold=true',
    url: 'https://elevenlabs.io',
    rating: 4.9,
    reviewCount: 6500
  },

  // Productivity
  {
    id: '11',
    name: 'Notion AI',
    category: 'Productivity',
    description: 'Write, plan, and organize with AI inside your notes.',
    imageUrl: 'https://images.unsplash.com/photo-1680795455806-05459392c6b4?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Notion&background=000&color=fff&size=128&bold=true',
    url: 'https://www.notion.so/product/ai',
    rating: 4.8,
    reviewCount: 18000
  },
  {
    id: '12',
    name: 'Otter.ai',
    category: 'Productivity',
    description: 'AI meeting assistant that records audio, writes notes, and summarizes.',
    imageUrl: 'https://images.unsplash.com/photo-1589254065909-b7086221d0ea?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Otter&background=2980b9&color=fff&size=128&bold=true',
    url: 'https://otter.ai',
    rating: 4.5,
    reviewCount: 5600
  },
  {
    id: '13',
    name: 'Grammarly',
    category: 'Productivity',
    description: 'AI writing assistance for clear, effective communication.',
    imageUrl: 'https://images.unsplash.com/photo-1519241047957-be3152ef05b9?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Grammarly&background=10ac84&color=fff&size=128&bold=true',
    url: 'https://www.grammarly.com',
    rating: 4.7,
    reviewCount: 85000
  },

  // Development
  {
    id: '14',
    name: 'GitHub Copilot',
    category: 'Development',
    description: 'Your AI pair programmer that suggests code as you type.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=GitHub&background=24292e&color=fff&size=128&bold=true',
    url: 'https://github.com/features/copilot',
    rating: 4.6,
    reviewCount: 12000
  },
  {
    id: '15',
    name: 'Hugging Face',
    category: 'Development',
    description: 'The AI community building the future. Build, train and deploy models.',
    imageUrl: 'https://images.unsplash.com/photo-1649363842144-8c82387137f8?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=HF&background=ffa502&color=fff&size=128&bold=true',
    url: 'https://huggingface.co',
    rating: 4.9,
    reviewCount: 9500
  },
  {
    id: '16',
    name: 'Replit',
    category: 'Development',
    description: 'Build software faster with AI-powered code enhancement.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Replit&background=303952&color=fff&size=128&bold=true',
    url: 'https://replit.com',
    rating: 4.5,
    reviewCount: 4100
  },
  {
    id: '17',
    name: 'Vercel v0',
    category: 'Development',
    description: 'Generate UI with simple text prompts and copy paste the code.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=v0&background=000&color=fff&size=128&bold=true',
    url: 'https://v0.dev',
    rating: 4.4,
    reviewCount: 850
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
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Paradox&background=0984e3&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.paradox.ai',
    rating: 4.6,
    reviewCount: 420
  },

  // Finance
  {
    id: 'sol-fin-1',
    name: 'Intuit AI',
    category: 'Finance',
    description: 'Financial automation for automated bookkeeping and forecasting.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Intuit&background=2c3e50&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.intuit.com',
    rating: 4.3,
    reviewCount: 8900
  },
  {
    id: 'sol-fin-2',
    name: 'Brex Tech',
    category: 'Finance',
    description: 'AI-driven spend management and corporate card solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Brex&background=ffa502&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.brex.com',
    rating: 4.7,
    reviewCount: 3100
  },

  // Sales & Marketing
  {
    id: 'sol-sales-1',
    name: 'Salesforce Einstein',
    category: 'Sales',
    description: 'CRM with built-in AI for predictive sales and customer insights.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=Salesforce&background=1798c1&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.salesforce.com/products/einstein/overview/',
    rating: 4.5,
    reviewCount: 25000
  },
  {
    id: 'sol-mkt-1',
    name: 'HubSpot AI',
    category: 'Marketing',
    description: 'Connected customer platform with AI-powered marketing automation.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=HubSpot&background=ff7a59&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://www.hubspot.com',
    rating: 4.6,
    reviewCount: 18000
  },

  // Consulting & Bespoke
  {
    id: 'sol-consult-1',
    name: 'Axon Bespoke',
    category: 'Consulting',
    description: 'Custom implementation of private LLMs for your enterprise data.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
    logoUrl: 'https://ui-avatars.com/api/?name=AutoGPT&background=2d3436&color=fff&size=128&bold=true',
    isSolution: true,
    url: 'https://news.agpt.co/',
    rating: 4.8,
    reviewCount: 95
  }
];
