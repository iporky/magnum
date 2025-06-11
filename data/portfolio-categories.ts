export interface GalleryImage {
  title: string
  description: string
  image: string
  author?: string
}

export interface PortfolioCategory {
  id: string
  name: string
  description: string
  images: GalleryImage[]
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "childrens-books-regional-languages",
    name: "Children's Books in Regional Languages",
    description: "Educational and entertaining books for children in multiple Indian languages",
    images: [
      {
        title: "Gujarati Spring",
        description: "A colorful children's book teaching about spring season in Gujarati language",
        image: "/images/categories/childrens-books-regional-languages/gujarati-spring.jpeg",
        author: "Read India Books",
      },
      {
        title: "Telugu Summer",
        description: "Children's book about summer activities in Telugu language",
        image: "/images/categories/childrens-books-regional-languages/telugu-summer.jpeg",
        author: "Read India Books",
      },
      {
        title: "Punjabi Monsoon",
        description: "Educational book about monsoon season in Punjabi language",
        image: "/images/categories/childrens-books-regional-languages/punjabi-monsoon.jpeg",
        author: "Read India Books",
      },
      {
        title: "Gujarati Summer",
        description: "Children's book about summer activities in Gujarati language",
        image: "/images/categories/childrens-books-regional-languages/gujarati-summer.jpeg",
        author: "Read India Books",
      },
      {
        title: "Hindi Monsoon",
        description: "Educational book about monsoon season in Hindi language",
        image: "/images/categories/childrens-books-regional-languages/hindi-monsoon.jpeg",
        author: "Read India Books",
      },
      {
        title: "Urdu Winter",
        description: "Children's book about winter season in Urdu language",
        image: "/images/categories/childrens-books-regional-languages/urdu-winter.jpeg",
        author: "Read India Books",
      },
      {
        title: "Guddu Learns to Ride",
        description: "Story about a boy learning to ride a bicycle in Hindi",
        image: "/images/categories/childrens-books-regional-languages/guddu-learns-to-ride-hindi.jpeg",
        author: "Arvind Passi & Subinita Deshmukh",
      },
      {
        title: "Bengali Spring",
        description: "Educational book about spring season in Bengali language",
        image: "/images/categories/childrens-books-regional-languages/bengali-spring.jpeg",
        author: "Read India Books",
      },
      {
        title: "Guddu Learns to Ride (Telugu)",
        description: "Story about a boy learning to ride a bicycle in Telugu",
        image: "/images/categories/childrens-books-regional-languages/guddu-learns-to-ride-telugu.jpeg",
        author: "Arvind Passi & Amit Adhikari",
      },
      {
        title: "Guddu and the Mangoes",
        description: "Story about a boy's adventure with mangoes in Hindi",
        image: "/images/categories/childrens-books-regional-languages/guddu-and-the-mangoes-hindi.jpeg",
        author: "Arvind Passi & Subinita Deshmukh",
      },
    ],
  },
  {
    id: "climate-change-mitigation-adaptation",
    name: "Climate Change Mitigation & Adaptation Studies",
    description: "Research publications and reports on climate change solutions and environmental studies",
    images: [
      {
        title: "Balancing Energy, Development and Climate Priorities in India",
        description:
          "UNEP publication analyzing current trends and future projections for sustainable development in India",
        image:
          "/images/categories/climate-change-mitigation-adaptation/energy-development-climate-priorities-india.jpeg",
        author: "PR Shukla, Amit Garg, Subash Dhar, Kristen Halsnaes",
      },
      {
        title: "Enhancing Energy Efficiency in India: Assessment of Sectoral Potentials",
        description: "Comprehensive assessment of energy efficiency opportunities across various sectors in India",
        image: "/images/categories/climate-change-mitigation-adaptation/enhancing-energy-efficiency-india.jpeg",
        author: "UN Environment & Partners",
      },
      {
        title: "A Toolkit for Preparation of Low Carbon Mobility Plan",
        description: "UNEP DTU Partnership toolkit for developing sustainable urban mobility solutions",
        image: "/images/categories/climate-change-mitigation-adaptation/low-carbon-mobility-plan.jpeg",
        author: "UNEP DTU Partnership",
      },
      {
        title: "Energy Access Realities in Urban Poor Communities of Developing Countries",
        description: "GNESD report on energy poverty and access challenges in urban informal settlements",
        image: "/images/categories/climate-change-mitigation-adaptation/gnesd-energy-access-urban-poor.jpeg",
        author: "GNESD & UNEP",
      },
      {
        title: "From Vulnerability to Resilience: The Challenge of Adaptation to Climate Change",
        description: "Multi-country case studies from Bangladesh, Brazil, China, India, South Africa and Korea",
        image: "/images/categories/climate-change-mitigation-adaptation/adaptation-climate-change-multi-country.jpeg",
        author: "Amit Garg, Woo-Jin Han, Jin Hwan Hwang, Jung Eun Kim, Kristen Halsnaes",
      },
      {
        title: "Promoting Low Carbon Transport in India",
        description: "UNEP DTU Partnership publication on sustainable transportation solutions for India",
        image: "/images/categories/climate-change-mitigation-adaptation/low-carbon-transport-india.jpeg",
        author: "UNEP DTU Partnership",
      },
      {
        title:
          "Good Practice in Designing and Implementing National Monitoring Systems for Adaptation to Climate Change",
        description: "CATIE and CTCN guide for developing climate adaptation monitoring frameworks",
        image: "/images/categories/climate-change-mitigation-adaptation/monitoring-systems-adaptation.jpeg",
        author: "CATIE & CTCN",
      },
      {
        title: "Climate-Smart Agriculture Manual for Agriculture Education in Zimbabwe",
        description: "Educational manual promoting sustainable agricultural practices and climate resilience",
        image: "/images/categories/climate-change-mitigation-adaptation/climate-smart-agriculture-manual.jpeg",
        author: "Government of Zimbabwe",
      },
      {
        title: "Enhancing Energy Efficiency in China: Assessment of Sectoral Potentials",
        description: "UN Environment assessment of energy efficiency opportunities across Chinese industrial sectors",
        image: "/images/categories/climate-change-mitigation-adaptation/enhancing-energy-efficiency-china.jpeg",
        author: "UN Environment & Partners",
      },
    ],
  },
  {
    id: "corporate-social-responsibility",
    name: "Corporate Social Responsibility",
    description: "Publications focusing on CSR initiatives, sustainability reports, and corporate governance",
    images: [
      {
        title: "Fostering Business Responsibility in MSME Clusters - Volume I",
        description: "Role of Policy Makers in promoting business responsibility among MSME clusters",
        image: "/images/categories/corporate-social-responsibility/fostering-business-responsibility-vol1.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "Fostering Business Responsibility in MSME Clusters - Volume II",
        description: "Role of Implementing Agencies in fostering business responsibility in MSME clusters",
        image: "/images/categories/corporate-social-responsibility/fostering-business-responsibility-vol2.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "Fostering Business Responsibility in MSME Clusters - Volume III",
        description: "Role of Cluster Development Agents in promoting sustainable business practices",
        image: "/images/categories/corporate-social-responsibility/fostering-business-responsibility-vol3.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "The Contribution of Responsible Business to Social Inclusiveness in India",
        description: "Focus on innovative approaches for responsible business practices and social inclusion",
        image: "/images/categories/corporate-social-responsibility/responsible-business-social-inclusiveness.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "Mapping Energy, Environment and Social Issues among MSME Clusters in India",
        description: "Way Forward for addressing sustainability challenges in MSME clusters",
        image: "/images/categories/corporate-social-responsibility/mapping-energy-environment-social-issues.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "Responsible Corporate Engagement in Rural India",
        description: "A Compendium of Good Practices for corporate social responsibility in rural areas",
        image: "/images/categories/corporate-social-responsibility/compendium-good-practices.jpeg",
        author: "Corporate Social Responsibility Research",
      },
    ],
  },
  {
    id: "foreign-languages",
    name: "Foreign Languages - French, Russian, Spanish",
    description: "Publications and educational materials in French, Russian, Spanish and other foreign languages",
    images: [
      // Images will be added when you upload them
    ],
  },
  {
    id: "global-consultants-trade-organisations",
    name: "Global Consultants, Trade Organisations",
    description: "Reports, white papers, and publications for international consultants and trade organizations",
    images: [
      // Images will be added when you upload them
    ],
  },
  {
    id: "government-of-india",
    name: "Government of India",
    description: "Official government publications, policy documents, and administrative reports",
    images: [
      // Images will be added when you upload them
    ],
  },
  {
    id: "school-books",
    name: "School Books",
    description: "Educational textbooks and learning materials for school curricula",
    images: [
      // Images will be added when you upload them
    ],
  },
  {
    id: "self-publishing",
    name: "Self-publishing",
    description: "Books and publications by individual authors and self-publishing projects",
    images: [
      // Images will be added when you upload them
    ],
  },
  {
    id: "think-tanks-defence-security",
    name: "Think Tanks, Defence and Security Issues",
    description: "Research publications on defense strategies, security studies, and policy analysis",
    images: [
      // Images will be added when you upload them
    ],
  },
]

// Filter out categories with no images for display
export const getDisplayableCategories = () => {
  return portfolioCategories.filter((category) => category.images.length > 0)
}
