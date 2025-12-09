
export interface ResourceItem {
    name: string;
    url: string;
    desc: string;
    category: string;
    type: 'video' | 'platform' | 'website' | 'github' | 'certification';
    logoText?: string;
    subscribers?: string;
    logoUrl?: string;
}

export const learningResources: ResourceItem[] = [
    // --- YOUTUBE CHANNELS ---
    // LLMs
    { name: 'Andrej Karpathy', url: 'https://www.youtube.com/@AndrejKarpathy', desc: 'Deep dives into LLMs, tokenization, and neural nets.', category: 'LLM', type: 'video', logoText: 'AK', subscribers: '2.5M', logoUrl: 'https://unavatar.io/youtube/AndrejKarpathy' },
    { name: 'AI Explained', url: 'https://www.youtube.com/@ai-explained-', desc: 'Rapid, in-depth analysis of latest LLM research.', category: 'LLM', type: 'video', logoText: 'AI', subscribers: '500K', logoUrl: 'https://unavatar.io/youtube/ai-explained-' },
    { name: 'Cohere', url: 'https://www.youtube.com/@CohereAI', desc: 'Enterprise LLM tutorials and RAG implementations.', category: 'LLM', type: 'video', logoText: 'CO', subscribers: '5K', logoUrl: 'https://unavatar.io/youtube/CohereAI' },
    { name: 'LangChain', url: 'https://www.youtube.com/@LangChain', desc: 'Building applications with LLMs and agents.', category: 'LLM', type: 'video', logoText: 'LC', subscribers: '100K', logoUrl: 'https://unavatar.io/youtube/LangChain' },
    { name: 'DeepLearning.AI', url: 'https://www.youtube.com/@Deeplearningai', desc: 'Andrew Ng\'s courses on AI, ML, and LLMs.', category: 'LLM', type: 'video', logoText: 'DL', subscribers: '800K', logoUrl: 'https://unavatar.io/youtube/Deeplearningai' },

    // GenAI
    { name: 'Two Minute Papers', url: 'https://www.youtube.com/user/keeroyz', desc: 'Visual summaries of SOTA generative models.', category: 'GenAI', type: 'video', logoText: '2M', subscribers: '1.4M', logoUrl: 'https://unavatar.io/youtube/keeroyz' },
    { name: 'Sentdex', url: 'https://www.youtube.com/user/sentdex', desc: 'Python implementations of GenAI and neural nets.', category: 'GenAI', type: 'video', logoText: 'SX', subscribers: '1.2M', logoUrl: 'https://unavatar.io/youtube/sentdex' },
    { name: 'IBM Technology', url: 'https://www.youtube.com/@IBMTechnology', desc: 'Conceptual explanations of Foundation Models.', category: 'GenAI', type: 'video', logoText: 'IBM', subscribers: '800K', logoUrl: 'https://unavatar.io/youtube/IBMTechnology' },
    { name: '3Blue1Brown', url: 'https://www.youtube.com/@3blue1brown', desc: 'Beautiful math animations explaining neural networks.', category: 'GenAI', type: 'video', logoText: '3B1B', subscribers: '6M', logoUrl: 'https://unavatar.io/youtube/3blue1brown' },
    { name: 'Yannic Kilcher', url: 'https://www.youtube.com/@YannicKilcher', desc: 'In-depth ML paper reviews and discussions.', category: 'GenAI', type: 'video', logoText: 'YK', subscribers: '300K', logoUrl: 'https://unavatar.io/youtube/YannicKilcher' },

    // Agents
    { name: 'David Shapiro', url: 'https://www.youtube.com/@DavidShapiroAutomator', desc: 'Autonomous agents, AGI alignment, and system design.', category: 'Agents', type: 'video', logoText: 'DS', subscribers: '150K', logoUrl: 'https://unavatar.io/youtube/DavidShapiroAutomator' },
    { name: 'Matthew Berman', url: 'https://www.youtube.com/@matthew_berman', desc: 'Tutorials on AutoGPT and open source local models.', category: 'Agents', type: 'video', logoText: 'MB', subscribers: '200K', logoUrl: 'https://unavatar.io/youtube/matthew_berman' },
    { name: 'Wes Roth', url: 'https://www.youtube.com/@WesRoth', desc: 'Daily news on the fast-moving world of AI agents.', category: 'Agents', type: 'video', logoText: 'WR', subscribers: '100K', logoUrl: 'https://unavatar.io/youtube/WesRoth' },
    { name: 'Lex Fridman', url: 'https://www.youtube.com/@lexfridman', desc: 'Long-form interviews with AI researchers and leaders.', category: 'Agents', type: 'video', logoText: 'LF', subscribers: '3.6M', logoUrl: 'https://unavatar.io/youtube/lexfridman' },

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
    { name: 'Hugging Face Transformers', url: 'https://github.com/huggingface/transformers', desc: 'State-of-the-art Machine Learning for Pytorch and TensorFlow.', category: 'LLM', type: 'github', logoText: 'HF', subscribers: '120k Stars', logoUrl: 'https://unavatar.io/github/huggingface' },
    { name: 'LlamaIndex', url: 'https://github.com/run-llama/llama_index', desc: 'Data framework for LLM applications to ingest context.', category: 'LLM', type: 'github', logoText: 'LI', subscribers: '30k Stars', logoUrl: 'https://unavatar.io/github/run-llama' },
    { name: 'Ollama', url: 'https://github.com/ollama/ollama', desc: 'Get up and running with Llama 2, Mistral, and other large language models.', category: 'LLM', type: 'github', logoText: 'OL', subscribers: '50k Stars', logoUrl: 'https://unavatar.io/github/ollama' },

    // GenAI
    { name: 'Stable Diffusion WebUI', url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui', desc: 'Stable Diffusion web UI.', category: 'GenAI', type: 'github', logoText: 'SD', subscribers: '130k Stars', logoUrl: 'https://unavatar.io/github/AUTOMATIC1111' },
    { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', desc: 'A node/graph based interface for Stable Diffusion.', category: 'GenAI', type: 'github', logoText: 'CF', subscribers: '40k Stars', logoUrl: 'https://unavatar.io/github/comfyanonymous' },

    // Agents
    { name: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT', desc: 'An experimental open-source attempt to make GPT-4 fully autonomous.', category: 'Agents', type: 'github', logoText: 'AG', subscribers: '160k Stars', logoUrl: 'https://unavatar.io/github/Significant-Gravitas' },
    { name: 'LangGraph', url: 'https://github.com/langchain-ai/langgraph', desc: 'Building language agents as graphs.', category: 'Agents', type: 'github', logoText: 'LG', subscribers: '10k Stars', logoUrl: 'https://unavatar.io/github/langchain-ai' },

    // Automation
    { name: 'Playwright', url: 'https://github.com/microsoft/playwright', desc: 'Framework for Web Testing and Automation.', category: 'Automation', type: 'github', logoText: 'PW', subscribers: '60k Stars', logoUrl: 'https://unavatar.io/github/microsoft' },
    { name: 'Selenium', url: 'https://github.com/SeleniumHQ/selenium', desc: 'A browser automation framework and ecosystem.', category: 'Automation', type: 'github', logoText: 'SE', subscribers: '30k Stars', logoUrl: 'https://unavatar.io/github/SeleniumHQ' },

    // DSA
    { name: 'The Algorithms - Python', url: 'https://github.com/TheAlgorithms/Python', desc: 'All Algorithms implemented in Python.', category: 'DSA', type: 'github', logoText: 'TA', subscribers: '180k Stars', logoUrl: 'https://unavatar.io/github/TheAlgorithms' },
    { name: 'JavaScript Algorithms', url: 'https://github.com/trekhleb/javascript-algorithms', desc: 'Algorithms and data structures implemented in JavaScript.', category: 'DSA', type: 'github', logoText: 'JS', subscribers: '170k Stars', logoUrl: 'https://unavatar.io/github/trekhleb' },


    // --- INTERACTIVE PLATFORMS ---
    { name: 'Coursera', url: 'https://www.coursera.org/', desc: 'Deep Learning Specialization by Andrew Ng.', category: 'Interactive', type: 'platform', logoText: 'C', subscribers: '100M+', logoUrl: 'https://logo.clearbit.com/coursera.org' },
    { name: 'Fast.ai', url: 'https://www.fast.ai/', desc: 'Practical Deep Learning for Coders.', category: 'Interactive', type: 'platform', logoText: 'F', subscribers: '200K+', logoUrl: 'https://logo.clearbit.com/fast.ai' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/', desc: 'Datasets, notebooks, and competitions.', category: 'Interactive', type: 'platform', logoText: 'K', subscribers: '10M+', logoUrl: 'https://logo.clearbit.com/kaggle.com' },
    { name: 'Hugging Face', url: 'https://huggingface.co/learn', desc: 'NLP course and transformer docs.', category: 'Interactive', type: 'platform', logoText: 'HF', subscribers: '2M+', logoUrl: 'https://logo.clearbit.com/huggingface.co' },
    { name: 'DataCamp', url: 'https://www.datacamp.com/', desc: 'Interactive courses on data science and AI.', category: 'Interactive', type: 'platform', logoText: 'DC', subscribers: '12M+', logoUrl: 'https://logo.clearbit.com/datacamp.com' },
    { name: 'Udacity', url: 'https://www.udacity.com/', desc: 'Nanodegree programs in AI and ML.', category: 'Interactive', type: 'platform', logoText: 'U', subscribers: '15M+', logoUrl: 'https://logo.clearbit.com/udacity.com' },
    { name: 'edX', url: 'https://www.edx.org/', desc: 'University-level AI and ML courses.', category: 'Interactive', type: 'platform', logoText: 'eX', subscribers: '50M+', logoUrl: 'https://logo.clearbit.com/edx.org' },
    { name: 'Brilliant', url: 'https://brilliant.org/', desc: 'Interactive math and CS problem solving.', category: 'Interactive', type: 'platform', logoText: 'B', subscribers: '10M+', logoUrl: 'https://logo.clearbit.com/brilliant.org' },
    { name: 'Google Colab', url: 'https://colab.research.google.com/', desc: 'Free Jupyter notebooks with GPU support.', category: 'Interactive', type: 'platform', logoText: 'GC', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/google.com' },
    { name: 'Deepnote', url: 'https://deepnote.com/', desc: 'Collaborative data science notebooks.', category: 'Interactive', type: 'platform', logoText: 'DN', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/deepnote.com' },
    { name: 'Replicate', url: 'https://replicate.com/', desc: 'Run and fine-tune open-source models.', category: 'Interactive', type: 'platform', logoText: 'R', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/replicate.com' },
    { name: 'Weights & Biases', url: 'https://wandb.ai/', desc: 'ML experiment tracking and visualization.', category: 'Interactive', type: 'platform', logoText: 'WB', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/wandb.ai' },

    // --- RESEARCH WEBSITES ---
    { name: 'Papers with Code', url: 'https://paperswithcode.com/', desc: 'Trends in SOTA research with code.', category: 'Research', type: 'website', logoText: 'PC', subscribers: '1M+', logoUrl: 'https://logo.clearbit.com/paperswithcode.com' },
    { name: 'arXiv.org', url: 'https://arxiv.org/list/cs.AI/recent', desc: 'Primary source for AI papers.', category: 'Research', type: 'website', logoText: 'AX', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/arxiv.org' },
    { name: 'OpenAI Research', url: 'https://openai.com/research', desc: 'Cutting-edge research from OpenAI.', category: 'Research', type: 'website', logoText: 'OI', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/openai.com' },
    { name: 'Distill.pub', url: 'https://distill.pub/', desc: 'Clear, dynamic ML explanations.', category: 'Research', type: 'website', logoText: 'DP', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/distill.pub' },
    { name: 'Google AI Blog', url: 'https://ai.googleblog.com/', desc: 'Latest research from Google AI.', category: 'Research', type: 'website', logoText: 'G', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/google.com' },
    { name: 'Meta AI Research', url: 'https://ai.meta.com/research/', desc: 'Research papers and projects from Meta.', category: 'Research', type: 'website', logoText: 'M', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/meta.com' },
    { name: 'DeepMind Research', url: 'https://www.deepmind.com/research', desc: 'Breakthrough AI research from DeepMind.', category: 'Research', type: 'website', logoText: 'DM', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/deepmind.com' },
    { name: 'Microsoft Research AI', url: 'https://www.microsoft.com/en-us/research/research-area/artificial-intelligence/', desc: 'AI research from Microsoft.', category: 'Research', type: 'website', logoText: 'MS', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Anthropic Research', url: 'https://www.anthropic.com/research', desc: 'AI safety and research from Anthropic.', category: 'Research', type: 'website', logoText: 'A', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/anthropic.com' },
    { name: 'AI Index Report', url: 'https://aiindex.stanford.edu/', desc: 'Annual report on AI progress from Stanford.', category: 'Research', type: 'website', logoText: 'AI', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/stanford.edu' },
    { name: 'Semantic Scholar', url: 'https://www.semanticscholar.org/', desc: 'AI-powered research paper search.', category: 'Research', type: 'website', logoText: 'SS', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/semanticscholar.org' },

    // --- CERTIFICATIONS ---
    // Cloud Certifications
    { name: 'Google Cloud AI', url: 'https://cloud.google.com/learn/certification/machine-learning-engineer', desc: 'Professional ML Engineer certification.', category: 'Cloud', type: 'certification', logoText: 'GCP', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/cloud.google.com' },
    { name: 'AWS AI/ML', url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/', desc: 'AWS Certified Machine Learning Specialty.', category: 'Cloud', type: 'certification', logoText: 'AWS', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/aws.amazon.com' },
    { name: 'Microsoft Azure AI', url: 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/', desc: 'Azure AI Engineer Associate certification.', category: 'Cloud', type: 'certification', logoText: 'AZ', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Oracle Cloud AI', url: 'https://education.oracle.com/oracle-cloud-infrastructure-2024-ai-foundations-associate/pexam_1Z0-1122-24', desc: 'Oracle Cloud AI Foundations certification.', category: 'Cloud', type: 'certification', logoText: 'O', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/oracle.com' },
    { name: 'Alibaba Cloud AI', url: 'https://edu.alibabacloud.com/certification', desc: 'Alibaba Cloud AI certification programs.', category: 'Cloud', type: 'certification', logoText: 'AC', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/alibabacloud.com' },
    { name: 'IBM Cloud AI', url: 'https://www.ibm.com/training/cloud', desc: 'IBM Cloud AI and Watson certifications.', category: 'Cloud', type: 'certification', logoText: 'IBM', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/ibm.com' },

    // AI/ML Certifications
    { name: 'TensorFlow Developer', url: 'https://www.tensorflow.org/certificate', desc: 'TensorFlow Developer Certificate.', category: 'AI/ML', type: 'certification', logoText: 'TF', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/tensorflow.org' },
    { name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/courses/', desc: 'AI and Deep Learning specializations.', category: 'AI/ML', type: 'certification', logoText: 'DL', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/deeplearning.ai' },
    { name: 'NVIDIA Deep Learning', url: 'https://www.nvidia.com/en-us/training/', desc: 'NVIDIA Deep Learning Institute certifications.', category: 'AI/ML', type: 'certification', logoText: 'NV', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/nvidia.com' },
    { name: 'Stanford ML', url: 'https://www.coursera.org/specializations/machine-learning-introduction', desc: 'Machine Learning Specialization by Andrew Ng.', category: 'AI/ML', type: 'certification', logoText: 'S', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/stanford.edu' },
    { name: 'MIT Professional', url: 'https://professional.mit.edu/programs/certificate-programs/professional-certificate-program-machine-learning-artificial', desc: 'MIT Professional Certificate in ML & AI.', category: 'AI/ML', type: 'certification', logoText: 'MIT', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/mit.edu' },
    { name: 'Hugging Face NLP', url: 'https://huggingface.co/learn/nlp-course/chapter1/1', desc: 'NLP Course and certifications.', category: 'AI/ML', type: 'certification', logoText: 'HF', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/huggingface.co' },
    { name: 'Fast.ai', url: 'https://www.fast.ai/', desc: 'Practical Deep Learning certificates.', category: 'AI/ML', type: 'certification', logoText: 'F', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/fast.ai' },
    { name: 'PyTorch Certification', url: 'https://pytorch.org/certifications', desc: 'PyTorch certification programs.', category: 'AI/ML', type: 'certification', logoText: 'PT', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/pytorch.org' },
    { name: 'OpenAI Certification', url: 'https://platform.openai.com/docs/guides/safety-best-practices', desc: 'OpenAI API and safety certifications.', category: 'AI/ML', type: 'certification', logoText: 'OAI', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/openai.com' },

    // Data Science Certifications
    { name: 'Databricks', url: 'https://www.databricks.com/learn/certification', desc: 'Databricks Certified Data Engineer.', category: 'Data', type: 'certification', logoText: 'DB', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/databricks.com' },
    { name: 'DataCamp', url: 'https://www.datacamp.com/certification', desc: 'Data Scientist and ML certifications.', category: 'Data', type: 'certification', logoText: 'DC', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/datacamp.com' },
    { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', desc: 'Free micro-courses with certificates.', category: 'Data', type: 'certification', logoText: 'K', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/kaggle.com' },
    { name: 'Snowflake', url: 'https://www.snowflake.com/certifications/', desc: 'Snowflake Data Cloud certifications.', category: 'Data', type: 'certification', logoText: 'SF', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/snowflake.com' },
    { name: 'Tableau', url: 'https://www.tableau.com/learn/certification', desc: 'Tableau Desktop and Data Analyst certs.', category: 'Data', type: 'certification', logoText: 'TB', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/tableau.com' },
    { name: 'Alteryx', url: 'https://www.alteryx.com/certification', desc: 'Alteryx Designer and Analytics certs.', category: 'Data', type: 'certification', logoText: 'AX', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/alteryx.com' },
    { name: 'Cloudera', url: 'https://www.cloudera.com/about/training/certification.html', desc: 'Big Data and ML certifications.', category: 'Data', type: 'certification', logoText: 'CL', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/cloudera.com' },

    // Professional Certifications
    { name: 'Google Data Analytics', url: 'https://www.coursera.org/professional-certificates/google-data-analytics', desc: 'Google Data Analytics Certificate.', category: 'Professional', type: 'certification', logoText: 'G', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/coursera.org' },
    { name: 'IBM AI Engineering', url: 'https://www.coursera.org/professional-certificates/ai-engineer', desc: 'IBM AI Engineering Professional Certificate.', category: 'Professional', type: 'certification', logoText: 'IBM', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/ibm.com' },
    { name: 'Meta AI', url: 'https://www.coursera.org/professional-certificates/meta-back-end-developer', desc: 'Meta Professional Certificates.', category: 'Professional', type: 'certification', logoText: 'M', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/meta.com' },
    { name: 'Salesforce AI', url: 'https://trailhead.salesforce.com/credentials/aiassociate', desc: 'Salesforce AI Associate certification.', category: 'Professional', type: 'certification', logoText: 'SF', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/salesforce.com' },
    { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/topics/artificial-intelligence-ai', desc: 'AI and ML courses with certificates.', category: 'Professional', type: 'certification', logoText: 'LI', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/linkedin.com' },
    { name: 'Udacity Nanodegree', url: 'https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898', desc: 'AI Programming with Python Nanodegree.', category: 'Professional', type: 'certification', logoText: 'U', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/udacity.com' },
    { name: 'edX MicroMasters', url: 'https://www.edx.org/micromasters/columbiax-artificial-intelligence', desc: 'Columbia AI MicroMasters Program.', category: 'Professional', type: 'certification', logoText: 'eX', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/edx.org' },
    { name: 'Pluralsight', url: 'https://www.pluralsight.com/paths/machine-learning', desc: 'ML and AI skill paths with assessments.', category: 'Professional', type: 'certification', logoText: 'PS', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/pluralsight.com' },
    { name: 'Simplilearn', url: 'https://www.simplilearn.com/artificial-intelligence-masters-program-training-course', desc: 'AI and ML Master\'s programs.', category: 'Professional', type: 'certification', logoText: 'SL', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/simplilearn.com' },
    { name: 'Great Learning', url: 'https://www.mygreatlearning.com/artificial-intelligence-course', desc: 'AI and ML certification programs.', category: 'Professional', type: 'certification', logoText: 'GL', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/mygreatlearning.com' },
    { name: 'Springboard', url: 'https://www.springboard.com/courses/ai-machine-learning-career-track/', desc: 'AI/ML Career Track with job guarantee.', category: 'Professional', type: 'certification', logoText: 'SB', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/springboard.com' },
    { name: 'DataRobot', url: 'https://www.datarobot.com/university/', desc: 'AutoML and AI platform certifications.', category: 'Professional', type: 'certification', logoText: 'DR', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/datarobot.com' },
    { name: 'H2O.ai', url: 'https://h2o.ai/university/', desc: 'H2O.ai machine learning certifications.', category: 'Professional', type: 'certification', logoText: 'H2O', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/h2o.ai' },
    { name: 'SAS', url: 'https://www.sas.com/en_us/certification.html', desc: 'SAS Advanced Analytics certifications.', category: 'Professional', type: 'certification', logoText: 'SAS', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/sas.com' },
    { name: 'Dell Technologies', url: 'https://education.dellemc.com/content/emc/en-us/home/certification-overview.html', desc: 'Data Science and AI certifications.', category: 'Professional', type: 'certification', logoText: 'DELL', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/dell.com' },
    { name: 'Cisco AI', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html', desc: 'Cisco AI and ML infrastructure certs.', category: 'Professional', type: 'certification', logoText: 'C', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/cisco.com' },
    { name: 'Red Hat AI', url: 'https://www.redhat.com/en/services/certification', desc: 'Red Hat OpenShift AI certifications.', category: 'Professional', type: 'certification', logoText: 'RH', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/redhat.com' },
    { name: 'CompTIA Data+', url: 'https://www.comptia.org/certifications/data', desc: 'CompTIA Data Analytics certification.', category: 'Professional', type: 'certification', logoText: 'CT', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/comptia.org' },
];

