
export interface ResourceItem {
    name: string;
    url: string;
    desc: string;
    category: string;
    type: 'video' | 'platform' | 'website' | 'github';
    logoText?: string;
    subscribers?: string;
    logoUrl?: string;
}

export const learningResources: ResourceItem[] = [
    // --- YOUTUBE CHANNELS ---
    // LLMs
    { name: 'Andrej Karpathy', url: 'https://www.youtube.com/@AndrejKarpathy', desc: 'Deep dives into LLMs, tokenization, and neural nets.', category: 'Large Language Models', type: 'video', logoText: 'AK', subscribers: '2.5M', logoUrl: 'https://unavatar.io/youtube/AndrejKarpathy' },
    { name: 'AI Explained', url: 'https://www.youtube.com/@ai-explained-', desc: 'Rapid, in-depth analysis of latest LLM research.', category: 'Large Language Models', type: 'video', logoText: 'AI', subscribers: '500K', logoUrl: 'https://unavatar.io/youtube/ai-explained-' },
    { name: 'Cohere', url: 'https://www.youtube.com/@CohereAI', desc: 'Enterprise LLM tutorials and RAG implementations.', category: 'Large Language Models', type: 'video', logoText: 'CO', subscribers: '5K', logoUrl: 'https://unavatar.io/youtube/CohereAI' },
    { name: 'LangChain', url: 'https://www.youtube.com/@LangChain', desc: 'Building applications with LLMs and agents.', category: 'Large Language Models', type: 'video', logoText: 'LC', subscribers: '100K', logoUrl: 'https://unavatar.io/youtube/LangChain' },
    { name: 'DeepLearning.AI', url: 'https://www.youtube.com/@Deeplearningai', desc: 'Andrew Ng\'s courses on AI, ML, and LLMs.', category: 'Large Language Models', type: 'video', logoText: 'DL', subscribers: '800K', logoUrl: 'https://unavatar.io/youtube/Deeplearningai' },

    // GenAI
    { name: 'Two Minute Papers', url: 'https://www.youtube.com/user/keeroyz', desc: 'Visual summaries of SOTA generative models.', category: 'Generative AI', type: 'video', logoText: '2M', subscribers: '1.4M', logoUrl: 'https://unavatar.io/youtube/keeroyz' },
    { name: 'Sentdex', url: 'https://www.youtube.com/user/sentdex', desc: 'Python implementations of GenAI and neural nets.', category: 'Generative AI', type: 'video', logoText: 'SX', subscribers: '1.2M', logoUrl: 'https://unavatar.io/youtube/sentdex' },
    { name: 'IBM Technology', url: 'https://www.youtube.com/@IBMTechnology', desc: 'Conceptual explanations of Foundation Models.', category: 'Generative AI', type: 'video', logoText: 'IBM', subscribers: '800K', logoUrl: 'https://unavatar.io/youtube/IBMTechnology' },
    { name: '3Blue1Brown', url: 'https://www.youtube.com/@3blue1brown', desc: 'Beautiful math animations explaining neural networks.', category: 'Generative AI', type: 'video', logoText: '3B1B', subscribers: '6M', logoUrl: 'https://unavatar.io/youtube/3blue1brown' },
    { name: 'Yannic Kilcher', url: 'https://www.youtube.com/@YannicKilcher', desc: 'In-depth ML paper reviews and discussions.', category: 'Generative AI', type: 'video', logoText: 'YK', subscribers: '300K', logoUrl: 'https://unavatar.io/youtube/YannicKilcher' },

    // Agents
    { name: 'David Shapiro', url: 'https://www.youtube.com/@DavidShapiroAutomator', desc: 'Autonomous agents, AGI alignment, and system design.', category: 'Agentic AI', type: 'video', logoText: 'DS', subscribers: '150K', logoUrl: 'https://unavatar.io/youtube/DavidShapiroAutomator' },
    { name: 'Matthew Berman', url: 'https://www.youtube.com/@matthew_berman', desc: 'Tutorials on AutoGPT and open source local models.', category: 'Agentic AI', type: 'video', logoText: 'MB', subscribers: '200K', logoUrl: 'https://unavatar.io/youtube/matthew_berman' },
    { name: 'Wes Roth', url: 'https://www.youtube.com/@WesRoth', desc: 'Daily news on the fast-moving world of AI agents.', category: 'Agentic AI', type: 'video', logoText: 'WR', subscribers: '100K', logoUrl: 'https://unavatar.io/youtube/WesRoth' },
    { name: 'Lex Fridman', url: 'https://www.youtube.com/@lexfridman', desc: 'Long-form interviews with AI researchers and leaders.', category: 'Agentic AI', type: 'video', logoText: 'LF', subscribers: '3.6M', logoUrl: 'https://unavatar.io/youtube/lexfridman' },

    // Automation
    { name: 'Tech With Tim', url: 'https://www.youtube.com/@TechWithTim', desc: 'Python automation and software engineering.', category: 'Automation', type: 'video', logoText: 'TT', subscribers: '3M', logoUrl: 'https://unavatar.io/youtube/TechWithTim' },
    { name: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck', desc: 'IT automation, cloud, and hacking tutorials.', category: 'Automation', type: 'video', logoText: 'NC', subscribers: '4M', logoUrl: 'https://unavatar.io/youtube/NetworkChuck' },
    { name: 'Automate Boring Stuff', url: 'https://www.youtube.com/playlist?list=PL0-84-yl1fUnRuXGFe_F7qSH1LEnn9LkW', desc: 'Classic Python automation course playlist.', category: 'Automation', type: 'video', logoText: 'ABS', subscribers: '5M', logoUrl: 'https://unavatar.io/youtube/AlSweigart' },

    // DSA
    { name: 'NeetCode', url: 'https://www.youtube.com/@NeetCode', desc: 'LeetCode solutions and DSA patterns.', category: 'DSA', type: 'video', logoText: 'NC', subscribers: '800K', logoUrl: 'https://unavatar.io/youtube/NeetCode' },
    { name: 'Abdul Bari', url: 'https://www.youtube.com/@abdul_bari', desc: 'Legendary algorithms and CS concepts.', category: 'DSA', type: 'video', logoText: 'AB', subscribers: '1M', logoUrl: 'https://unavatar.io/youtube/abdul_bari' },
    { name: 'freeCodeCamp', url: 'https://www.youtube.com/@freecodecamp', desc: 'Full courses on Python and System Design.', category: 'DSA', type: 'video', logoText: 'FCC', subscribers: '9M', logoUrl: 'https://unavatar.io/youtube/freecodecamp' },
    { name: 'Krish Naik', url: 'https://www.youtube.com/@krishnaik06', desc: 'ML, DL, and AI with real-world scenarios.', category: 'DSA', type: 'video', logoText: 'KN', subscribers: '1M', logoUrl: 'https://unavatar.io/youtube/krishnaik06' },

    // --- GITHUB REPOS ---
    // LLMs
    { name: 'Hugging Face Transformers', url: 'https://github.com/huggingface/transformers', desc: 'State-of-the-art Machine Learning for Pytorch and TensorFlow.', category: 'Large Language Models', type: 'github', logoText: 'HF', subscribers: '120k Stars', logoUrl: 'https://unavatar.io/github/huggingface' },
    { name: 'LlamaIndex', url: 'https://github.com/run-llama/llama_index', desc: 'Data framework for LLM applications to ingest context.', category: 'Large Language Models', type: 'github', logoText: 'LI', subscribers: '30k Stars', logoUrl: 'https://unavatar.io/github/run-llama' },
    { name: 'Ollama', url: 'https://github.com/ollama/ollama', desc: 'Get up and running with Llama 2, Mistral, and other large language models.', category: 'Large Language Models', type: 'github', logoText: 'OL', subscribers: '50k Stars', logoUrl: 'https://unavatar.io/github/ollama' },

    // GenAI
    { name: 'Stable Diffusion WebUI', url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui', desc: 'Stable Diffusion web UI.', category: 'Generative AI', type: 'github', logoText: 'SD', subscribers: '130k Stars', logoUrl: 'https://unavatar.io/github/AUTOMATIC1111' },
    { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', desc: 'A node/graph based interface for Stable Diffusion.', category: 'Generative AI', type: 'github', logoText: 'CF', subscribers: '40k Stars', logoUrl: 'https://unavatar.io/github/comfyanonymous' },

    // Agents
    { name: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT', desc: 'An experimental open-source attempt to make GPT-4 fully autonomous.', category: 'Agentic AI', type: 'github', logoText: 'AG', subscribers: '160k Stars', logoUrl: 'https://unavatar.io/github/Significant-Gravitas' },
    { name: 'LangGraph', url: 'https://github.com/langchain-ai/langgraph', desc: 'Building language agents as graphs.', category: 'Agentic AI', type: 'github', logoText: 'LG', subscribers: '10k Stars', logoUrl: 'https://unavatar.io/github/langchain-ai' },

    // Automation
    { name: 'Playwright', url: 'https://github.com/microsoft/playwright', desc: 'Framework for Web Testing and Automation.', category: 'Automation', type: 'github', logoText: 'PW', subscribers: '60k Stars', logoUrl: 'https://unavatar.io/github/microsoft' },
    { name: 'Selenium', url: 'https://github.com/SeleniumHQ/selenium', desc: 'A browser automation framework and ecosystem.', category: 'Automation', type: 'github', logoText: 'SE', subscribers: '30k Stars', logoUrl: 'https://unavatar.io/github/SeleniumHQ' },

    // DSA
    { name: 'The Algorithms - Python', url: 'https://github.com/TheAlgorithms/Python', desc: 'All Algorithms implemented in Python.', category: 'DSA', type: 'github', logoText: 'TA', subscribers: '180k Stars', logoUrl: 'https://unavatar.io/github/TheAlgorithms' },
    { name: 'JavaScript Algorithms', url: 'https://github.com/trekhleb/javascript-algorithms', desc: 'Algorithms and data structures implemented in JavaScript.', category: 'DSA', type: 'github', logoText: 'JS', subscribers: '170k Stars', logoUrl: 'https://unavatar.io/github/trekhleb' },


    // --- PLATFORMS ---
    { name: 'Coursera', url: 'https://www.coursera.org/', desc: 'Deep Learning Specialization by Andrew Ng.', category: 'Interactive', type: 'platform', logoText: 'C', subscribers: '100M+', logoUrl: 'https://logo.clearbit.com/coursera.org' },
    { name: 'Fast.ai', url: 'https://www.fast.ai/', desc: 'Practical Deep Learning for Coders.', category: 'Interactive', type: 'platform', logoText: 'F', subscribers: '200K+', logoUrl: 'https://logo.clearbit.com/fast.ai' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/', desc: 'Datasets, notebooks, and competitions.', category: 'Interactive', type: 'platform', logoText: 'K', subscribers: '10M+', logoUrl: 'https://logo.clearbit.com/kaggle.com' },
    { name: 'Hugging Face', url: 'https://huggingface.co/learn', desc: 'NLP course and transformer docs.', category: 'Interactive', type: 'platform', logoText: 'HF', subscribers: '2M+', logoUrl: 'https://logo.clearbit.com/huggingface.co' },

    // --- WEBSITES ---
    { name: 'Papers with Code', url: 'https://paperswithcode.com/', desc: 'Trends in SOTA research with code.', category: 'Research', type: 'website', logoText: 'PC', subscribers: '1M+', logoUrl: 'https://logo.clearbit.com/paperswithcode.com' },
    { name: 'arXiv.org', url: 'https://arxiv.org/list/cs.AI/recent', desc: 'Primary source for AI papers.', category: 'Research', type: 'website', logoText: 'AX', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/arxiv.org' },
    { name: 'OpenAI Research', url: 'https://openai.com/research', desc: 'Cutting-edge research from OpenAI.', category: 'Research', type: 'website', logoText: 'OI', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/openai.com' },
    { name: 'Distill.pub', url: 'https://distill.pub/', desc: 'Clear, dynamic ML explanations.', category: 'Research', type: 'website', logoText: 'DP', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/distill.pub' }
];
