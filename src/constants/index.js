import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import { cohere, langchain, openai, anthropic, aws, clay, lambda, snowflake, neo4j, alx, mc, sand } from "../assets/stack";


export const navigation = [
  {
    id: "0",
    title: "About",
    url: "/#about",
  },
  {
    id: "1",
    title: "Benefits",
    url: "/#benefits",
  },
  {
    id: "2",
    title: "Blog",
    url: "/#blog",
  },
  {
    id: "3",
    title: "Learning Hub",
    url: "https://edulga-roadmap-generator.vercel.app/",
  },
  {
    id: "4",
    title: "Contact",
    url: "/contact",
  },
  {
    id: "5",
    title: "Team",
    url: "/team",
  },
  {
    id: "5",
    title: "New account",
    url: "/#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "/#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

// export const partnerLogos = [mastercard, sand, alx];

export const companyLogos = [cohere, langchain, openai, anthropic, aws, neo4j, lambda, mc, sand, alx];
export const backedBy = [alx, sand]


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  // chromecast,
  // sliders04,
  // sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI for Healthcare ",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Rise of AI Agents",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Realtime Answer Retrieval (RAG)",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Knowledge as a Service (KaaS)",
    text: "Knowledge as a Service (KaaS) provides on-demand access to a comprehensive knowledge base tailored to your business needs. With KaaS, your organization can integrate expert insights, curated data, and advanced AI-driven knowledge systems to enhance decision-making, optimize workflows, and reduce operational costs. This service ensures that your team has immediate access to critical information, fostering continuous learning and innovation",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
  {
    id: "3",
    title: "Understanding Prompt Engineering",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText1 =
  "AI-driven, real-time learning paths tailored to individual goals, skills, and the latest job market trends.";

export const collabText2 =
  "Real-time insights into skill gaps and industry needs, enabling faster updates to curricula.";

export const collabText3 =
  "Match job requirements with learners who are trained in high-demand skills.";

export const collabContent = [
  {
    id: "0",
    title: "Hyper-Personalized Learning:",
    text: collabText1,
  },
  {
    id: "1",
    title: "Real-Time Curriculum Updates:",
    text: collabText2,
  },
  {
    id: "2",
    title: "Optimized Content Impact",
    text: collabText3,
  },
  // {
  //   id: "3",
  //   title: "Next-Gen and Recession-Proof",
  //   // text: collabText3,
  // },
  // {
  //   id: "4",
  //   title: "Scalable and Recession-Proof",
  //   // text: collabText3,
  // },
];

export const collabApps = [
  {
    id: "0",
    title: "alx",
    icon: alx,
    width: 26,
    height: 36,
    
  },
  {
    id: "1",
    title: "langchain",
    icon: langchain,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "anthropic",
    icon: anthropic,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "aws",
    icon: aws,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "lambda",
    icon: lambda,
    width: 34,
    height: 44,
  },
  {
    id: "5",
    title: "snowflake",
    icon: snowflake,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "openai",
    icon: openai,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "neo4j",
    icon: neo4j,
    width: 38,
    height: 32,
  },
  
];

export const pricing = [
  {
    id: "0",
    title: "Consultation",
    description: "AI chatbot, personalized recommendations",
    price: "300",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Web Transformation",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "500 ",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "3",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "For Learners",
    text: "Edulga aims to bridge the gap between learners and job-ready skills, potentially improving placement rates by 70%",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "For Institutions",
    text: "Universities that implemented real-time skill gap analytics improved graduate job placements by up to 20%—Edulga is designed to deliver similar results",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "For Employers",
    text: "Edulga's skill-based learning recommendations are designed to reduce hiring costs by 30% and improve candidate alignment for critical roles",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
 
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "1",
  //   title: "Twitter",
  //   iconUrl: twitter,
  //   url: "#",
  // },
  // {
  //   id: "2",
  //   title: "Instagram",
  //   iconUrl: instagram,
  //   url: "#",
  // },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  {
    id: "4",
    title: "Edulga",
    iconUrl: facebook,
    url: "https://www.linkedin.com/company/edulga/",
  },
];



// Service Content
// constants.js
export const serviceContent = [
  {
    title: "Advance AI Data Engineering",
    title2: "Unstructured data Framework",
    subtitle: "Edulga's Unstructured Framework allows the real-time handling of preprocessing unstructured data, transforming diverse educational content into structured, actionable knowledge. Our advanced NLP pipeline processes PDFs, videos, and presentations to extract key concepts, ensuring learners receive precisely curated content aligned with their learning goals and industry requirements.",
    images: [
      "/src/assets/services/data-framework.png",
    ],
    useCases: [
      "Ingest and preprocess unstructured educational content (PDFs, HTML, presentations) using NLP to extract key concepts and knowledge.",
      "Automatically structure unstructured data and feed it into the Knowledge Graph, ensuring real-time content delivery based on student queries.",
      "Enable personalized and context-driven learning experiences by integrating processed data into Edulga's adaptive LLM-powered learning pathways."
    ],
  },
  {
    title: "AI-Powered Learning Agents",
    title2: "Intelligent Learning Path Optimization",
    subtitle: "Edulga's AI agents continuously analyze learner performance, engagement patterns, and industry requirements to create dynamic, personalized learning experiences. These intelligent agents work in real-time to identify knowledge gaps, adjust difficulty levels, and recommend the most relevant content, ensuring each learner stays on an optimal path toward their career goals.",
    images: [
      "/src/assets/services/graph.png",
    ],
    useCases: [
      "Real-Time Learning Path Adaptation: Automatically adjusts content difficulty and topics based on learner progress and performance",
      "Smart Task Prioritization: Uses AI to sequence learning materials based on prerequisite relationships and career relevance",
      "Personalized Content Delivery: Matches learning resources with individual learning styles and career objectives"
    ],
  },
  {
    title: "Knowledge Graph & Retrieval-Augmented Generation (RAG)",
    title2: "Intelligent Knowledge Mapping & Real-Time Learning",
    subtitle: "Our advanced Knowledge Graph and RAG architecture creates a dynamic web of interconnected concepts, enabling precise, context-aware learning experiences. By combining vector-based search with graph relationships, we deliver personalized content that adapts to each learner's progress. This system continuously evolves, ensuring learners access the most relevant and up-to-date educational resources aligned with industry needs.",
    images: [
      "/src/assets/services/roadmap.png",
    ],
    useCases: [
      "Dynamic Knowledge Navigation: Maps relationships between concepts across disciplines, helping learners understand connections and prerequisites",
      "Contextual Learning Enhancement: Combines traditional course content with real-world applications and industry insights",
      "Adaptive Content Delivery: Automatically updates learning materials based on industry trends and learner feedback"
    ],
  }
];


export const brainwaveServices = [
  "Test",
  "Full-Stack Engineering",
  "Seamless Integration",
];




// Slider Settings
export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};