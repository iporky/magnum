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
    id: "self-publishing",
    name: "Self-publishing",
    description: "Books and publications by individual authors and self-publishing projects",
    images: [
      {
        title: "Book Publishing in Delhi",
        description: "Guide to local publishing resources and opportunities in the Delhi region",
        image: "/images/categories/Self-publishing/Book Publishing in Delhi.jpg",
        author: "Independent Publishers Association",
      },
      {
        title: "Coffee Table Book Printing",
        description: "Specialized printing techniques for high-quality coffee table and art books",
        image: "/images/categories/Self-publishing/Coffee table book printing.jpg",
        author: "Modern Print Solutions",
      },
      {
        title: "Digital Printing Solutions",
        description: "Overview of digital printing technologies for independent authors",
        image: "/images/categories/Self-publishing/Digital printing solutions.jpg",
        author: "Tech Print Innovations",
      },
      {
        title: "Don't Go To Prison After College",
        description: "Self-published career guidance book",
        image: "/images/categories/Self-publishing/Don't go to prison after college.jpg",
        author: "Jatin Bhandari",
      },
      {
        title: "Hardcover Book Printing",
        description: "Guide to professional hardcover binding techniques for self-publishers",
        image: "/images/categories/Self-publishing/Hardcover book printing.jpg",
        author: "Premier Binding Services",
      },
      {
        title: "High-quality Offset Printing",
        description: "Professional offset printing options for independent publishers seeking premium quality",
        image: "/images/categories/Self-publishing/High-quality offset printing.jpg",
        author: "Elite Print Press",
      },
      {
        title: "Self Publishing Guide",
        description: "Comprehensive handbook for authors navigating the self-publishing process",
        image: "/images/categories/Self-publishing/Self Publishing.jpg",
        author: "Independent Author Collective",
      },
      {
        title: "Self-publishing Success Stories",
        description: "Case studies of successful self-published authors and their publishing journeys",
        image: "/images/categories/Self-publishing/Self-publishing.jpg",
        author: "Author Success Network",
      },
      {
        title: "Spiritual Laws Of Nature",
        description: "Self-published exploration of spirituality and natural phenomena",
        image: "/images/categories/Self-publishing/Spiritual Laws Of Nature_custom publishing.jpg",
        author: "Dr. Anand Veeraswamy",
      },
    ],
  },
  {
    id: "think-tanks-defence-security",
    name: "Think Tanks, Defence and Security Issues",
    description: "Research publications on defence strategies, security studies, and policy analysis",
    images: [
      {
        title: "Balochistan-Forgotten War, Forsaken People",
        description: "Analysis of the ongoing conflict in Balochistan and its geopolitical implications",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Balochistan-Forgotten War, Forsaken People.jpg",
        author: "Vivekananda International Foundation",
      },
      {
        title: "Changing Security Dynamics in Southeast Asia",
        description: "Examination of emerging security challenges and strategic realignments in Southeast Asia",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Changing Security Dynamics in Southeast Asia.jpg",
        author: "Center for Strategic and International Studies",
      },
      {
        title: "India's Israel Policy",
        description: "Historical analysis and future prospects of India-Israel diplomatic and defence relations",
        image: "/images/categories/Think Tanks, Defence and Security Issues/India's Israel Policy.jpg",
        author: "Jawaharlal Nehru University Press",
      },
      {
        title: "Internal Security - Structure and Response Mechanisms",
        description: "Comprehensive overview of India's internal security framework and crisis response systems",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Internal Security - Structure and Response Mechanisms.jpg",
        author: "National Security Advisory Board",
      },
      {
        title: "Make In India",
        description: "Strategic assessment of defence manufacturing initiatives under the Make in India program",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Make In India.jpg",
        author: "Defence Research and Development Organisation",
      },
      {
        title: "Maritime Security-The Unlawful Dimension",
        description: "Analysis of maritime terrorism, piracy, and illegal activities in international waters",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Maritime Security-The Unlawful Dimension.jpg",
        author: "National Maritime Foundation",
      },
      {
        title: "Net Security Provider - India's Out-of-Area Contingency Operations",
        description: "Study of India's emerging role in international security operations beyond its borders",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Net Security Provider - India's Out-of-Area Contigency Operations.jpg",
        author: "Institute for Defence Studies and Analyses",
      },
      {
        title: "Pakistan on the Edge",
        description: "Strategic assessment of Pakistan's internal security challenges and regional implications",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Pakistan on the Edge.jpg",
        author: "Observer Research Foundation",
      },
      {
        title: "The Future of War and Peace in Asia",
        description: "Forward-looking analysis of emerging conflict scenarios and peace initiatives in Asia",
        image: "/images/categories/Think Tanks, Defence and Security Issues/The Future of War and Peace in Asia.jpg",
        author: "Strategic Studies Institute",
      },
    ],
  },
  {
    id: "global-consultants-trade-organisations",
    name: "Global Consultants, Trade Organisations",
    description: "Reports, white papers, and publications for international consultants and trade organizations",
    images: [
      {
        title: "Asset Management",
        description: "Comprehensive guide to modern asset management strategies for global organizations",
        image: "/images/categories/Global Consultants, Trade Organisations/Asset Management.jpg",
        author: "Global Finance Association",
      },
      {
        title: "Auto Components Industry Analysis",
        description: "Market trends and forecasts for the global automotive components sector",
        image: "/images/categories/Global Consultants, Trade Organisations/Auto Components.jpg",
        author: "Automotive Industry Consortium",
      },
      {
        title: "Building a Global Scale Chemical Industry",
        description: "Strategic roadmap for scaling operations in the international chemical manufacturing sector",
        image: "/images/categories/Global Consultants, Trade Organisations/Building a global scale chemical industry.jpg",
        author: "Chemical Industry Association",
      },
      {
        title: "CII Quality Summit Whitepaper",
        description: "Proceedings and insights from the Confederation of Indian Industry Quality Summit",
        image: "/images/categories/Global Consultants, Trade Organisations/CII Quality Summit Whitepaper.jpg",
        author: "Confederation of Indian Industry",
      },
      {
        title: "Highways Development",
        description: "Infrastructure development guidelines for international highway construction projects",
        image: "/images/categories/Global Consultants, Trade Organisations/Highways_Development.jpg",
        author: "International Transport Forum",
      },
      {
        title: "India's Labour Market",
        description: "McKinsey Global Institute analysis of trends and opportunities in India's workforce",
        image: "/images/categories/Global Consultants, Trade Organisations/MGI - India's Labour Market.jpg",
        author: "McKinsey Global Institute",
      },
      {
        title: "Nasscom - Perspective 2025",
        description: "Future outlook for India's IT and business services industry through 2025",
        image: "/images/categories/Global Consultants, Trade Organisations/Nasscom - Perspective 2025.jpg",
        author: "NASSCOM",
      },
      {
        title: "Quality in the Digital Era",
        description: "Framework for maintaining quality standards in digital transformation initiatives",
        image: "/images/categories/Global Consultants, Trade Organisations/Quality in the Digital Era.jpg",
        author: "Digital Quality Consortium",
      },
      {
        title: "Smart Cities White Paper",
        description: "Best practices and case studies in global smart city development projects",
        image: "/images/categories/Global Consultants, Trade Organisations/SmartCities_White paper.jpg",
        author: "Smart Cities Council",
      },
    ],
  },
  {
    id: "foreign-languages",
    name: "Foreign Languages - French, Rus, Spanish",
    description: "Publications in French, Russian, Spanish and other foreign languages",
    images: [
      {
        title: "French Agriculture Adaptation",
        description: "Guide to sustainable agricultural practices adapted for climate change in French",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/French Agriculture adaptation.jpg",
        author: "European Climate Foundation",
      },
      {
        title: "French Coastal Erosion",
        description: "Research publication on coastal erosion prevention and management in French",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/French Coastal Erosion.jpg",
        author: "Mediterranean Environmental Research Institute",
      },
      {
        title: "French TAP Guidance",
        description: "Technical Assistance Program guidance document for climate initiatives in French",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/French-TAP Guidance.jpg",
        author: "International Climate Initiative",
      },
      {
        title: "Russian Agriculture Mitigation",
        description: "Guidelines for reducing climate impact in agricultural practices in Russian",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/Russian Agriculture Mitigation.jpg",
        author: "Eurasian Climate Partnership",
      },
      {
        title: "Russian Building Standards",
        description: "Energy efficient building codes and standards publication in Russian",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/Russian-Building.jpg",
        author: "Moscow Institute of Architecture",
      },
      {
        title: "Russian Transport Systems",
        description: "Sustainable transportation planning guide in Russian",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/Russian_Transport.jpg",
        author: "Russian Urban Transport Institute",
      },
      {
        title: "Spanish NAMA Guidebook",
        description: "Nationally Appropriate Mitigation Actions implementation guide in Spanish",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/Spanish_NAMA Guidebook.jpg",
        author: "Latin American Climate Initiative",
      },
      {
        title: "Spanish National Monitoring Systems",
        description: "Framework for monitoring climate adaptation initiatives in Spanish",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/SPANISH_National Monitoring Systems for Adaptation.jpg",
        author: "Spanish Environmental Research Center",
      },
      {
        title: "Spanish Water Sector Adaptation",
        description: "Water resource management strategies for climate adaptation in Spanish",
        image: "/images/categories/Foreign Languages - French, Rus, Spanish/Spanish_Water Sector_Adaptation.jpg",
        author: "Iberian Water Alliance",
      },
    ],
  },
  {
    id: "Climate Change Mitigation and Adaptation",
    name: "Climate Change Mitigation and Adaptation",
    description: "Research publications and reports on climate change solutions and environmental studies",
    images: [
      {
        title: "Balancing Energy, Development and Climate Priorities in India",
        description:
          "UNEP publication analyzing current trends and future projections for sustainable development in India",
        image:
          "/images/categories/Climate Change Mitigation and Adaptation/energy-development-climate-priorities-india.jpeg",
        author: "PR Shukla, Amit Garg, Subash Dhar, Kristen Halsnaes",
      },
      {
        title: "Enhancing Energy Efficiency in India: Assessment of Sectoral Potentials",
        description: "Comprehensive assessment of energy efficiency opportunities across various sectors in India",
        image: "/images/categories/Climate Change Mitigation and Adaptation/enhancing-energy-efficiency-india.jpeg",
        author: "UN Environment & Partners",
      },
      {
        title: "A Toolkit for Preparation of Low Carbon Mobility Plan",
        description: "UNEP DTU Partnership toolkit for developing sustainable urban mobility solutions",
        image: "/images/categories/Climate Change Mitigation and Adaptation/low-carbon-mobility-plan.jpeg",
        author: "UNEP DTU Partnership",
      },
      {
        title: "Energy Access Realities in Urban Poor Communities of Developing Countries",
        description: "GNESD report on energy poverty and access challenges in urban informal settlements",
        image: "/images/categories/Climate Change Mitigation and Adaptation/gnesd-energy-access-urban-poor.jpeg",
        author: "GNESD & UNEP",
      },
      {
        title: "From Vulnerability to Resilience: The Challenge of Adaptation to Climate Change",
        description: "Multi-country case studies from Bangladesh, Brazil, China, India, South Africa and Korea",
        image: "/images/categories/Climate Change Mitigation and Adaptation/adaptation-climate-change-multi-country.jpeg",
        author: "Amit Garg, Woo-Jin Han, Jin Hwan Hwang, Jung Eun Kim, Kristen Halsnaes",
      },
      {
        title: "Promoting Low Carbon Transport in India",
        description: "UNEP DTU Partnership publication on sustainable transportation solutions for India",
        image: "/images/categories/Climate Change Mitigation and Adaptation/low-carbon-transport-india.jpeg",
        author: "UNEP DTU Partnership",
      },
      {
        title:
          "Good Practice in Designing and Implementing National Monitoring Systems for Adaptation to Climate Change",
        description: "CATIE and CTCN guide for developing climate adaptation monitoring frameworks",
        image: "/images/categories/Climate Change Mitigation and Adaptation/monitoring-systems-adaptation.jpeg",
        author: "CATIE & CTCN",
      },
      {
        title: "Climate-Smart Agriculture Manual for Agriculture Education in Zimbabwe",
        description: "Educational manual promoting sustainable agricultural practices and climate resilience",
        image: "/images/categories/Climate Change Mitigation and Adaptation/climate-smart-agriculture-manual.jpeg",
        author: "Government of Zimbabwe",
      },
      {
        title: "Enhancing Energy Efficiency in China: Assessment of Sectoral Potentials",
        description: "UN Environment assessment of energy efficiency opportunities across Chinese industrial sectors",
        image: "/images/categories/Climate Change Mitigation and Adaptation/enhancing-energy-efficiency-china.jpeg",
        author: "UN Environment & Partners",
      },
    ],
  },
  {
    id: "government-of-india",
    name: "Government of India",
    description: "Official government publications, policy documents, and administrative reports",
    images: [
      {
        title: "BIS Brochure Hindi",
        description: "Bureau of Indian Standards informational brochure in Hindi language",
        image: "/images/categories/Government of India/BIS Brochure Hindi.jpg",
        author: "Bureau of Indian Standards",
      },
      {
        title: " India's Trillion-Dollar Digital Opportunity",
        description: "Strategic framework for India's digital transformation initiatives",
        image: "/images/categories/Government of India/Digital India.jpg",
        author: "Ministry of Electronics & Information Technology",
      },
      {
        title: "National Policy on Disaster Management",
        description: "Government policy document on national security and emergency response",
        image: "/images/categories/Government of India/Cover Policy.jpg",
        author: "Ministry of Home Affairs",
      },
      {
        title: "BIS History",
        description: "Comprehensive history of the Bureau of Indian Standards and its evolution",
        image: "/images/categories/Government of India/BIS History.jpg",
        author: "Ministry of Consumer Affairs",
      },
      {
        title: "Civil Defence Cover",
        description: "Official guidelines for civil defence procedures and emergency preparedness",
        image: "/images/categories/Government of India/Civil Defense Cover.jpg",
        author: "National Disaster Management Authority",
      },
      {
        title: "Earthquake Hindi",
        description: "Public awareness manual for earthquake preparedness in Hindi",
        image: "/images/categories/Government of India/Earthquake Hindi.jpg",
        author: "National Disaster Management Authority",
      },
      {
        title: "Medical Preparedness & Mass Casualty Management",
        description: "Guidelines for healthcare systems responding to mass casualty incidents",
        image: "/images/categories/Government of India/Medical Preparedness & Mass Casualty Management.jpg",
        author: "Ministry of Health and Family Welfare",
      },
      {
        title: "Nuclear Cover",
        description: "Safety protocols and emergency response procedures for nuclear incidents",
        image: "/images/categories/Government of India/Nuclear Cover.jpg",
        author: "Department of Atomic Energy",
      },
      {
        title: "Pandemic",
        description: "National pandemic preparedness and response framework",
        image: "/images/categories/Government of India/Pandemic.jpg",
        author: "Indian Council of Medical Research",
      },
    ],
  },
  {
    id: "Corporate Social Responsibility",
    name: "Corporate Social Responsibility",
    description: "Publications focusing on CSR initiatives, sustainability reports, and corporate governance",
    images: [
      {
        title: "Fostering Business Responsibility in MSME Clusters - Volume I",
        description: "Role of Policy Makers in promoting business responsibility among MSME clusters",
        image: "/images/categories/Corporate Social Responsibility/fostering-business-responsibility-vol1.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "Mapping Energy, Environment and Social Issues among MSME Clusters in India",
        description: "Way Forward for addressing sustainability challenges in MSME clusters",
        image: "/images/categories/Corporate Social Responsibility/mapping-energy-environment-social-issues.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "Responsible Corporate Engagement in Rural India",
        description: "A Compendium of Good Practices for corporate social responsibility in rural areas",
        image: "/images/categories/Corporate Social Responsibility/compendium-good-practices.jpeg",
        author: "Corporate Social Responsibility Research",
      },
      {
        title: "Fostering Business Responsibility in MSME Clusters - Volume II",
        description: "Role of Implementing Agencies in fostering business responsibility in MSME clusters",
        image: "/images/categories/Corporate Social Responsibility/fostering-business-responsibility-vol2.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "Fostering Business Responsibility in MSME Clusters - Volume III",
        description: "Role of Cluster Development Agents in promoting sustainable business practices",
        image: "/images/categories/Corporate Social Responsibility/fostering-business-responsibility-vol3.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      },
      {
        title: "The Contribution of Responsible Business to Social Inclusiveness in India",
        description: "Focus on innovative approaches for responsible business practices and social inclusion",
        image: "/images/categories/Corporate Social Responsibility/responsible-business-social-inclusiveness.jpeg",
        author: "Indian Institute of Corporate Affairs & GIZ",
      }
    ],
  },
  {
    id: "school-books",
    name: "School Books",
    description: "Textbooks and learning materials for school curricula",
    images: [
      {
        title: "DPS Gurgaon",
        description: "Early learning textbook teaching colors and shapes recognition for preschool students",
        image: "/images/categories/School Books/DPS Colours & Shapes.jpg",
        author: "Delhi Public School Publications",
      },
      {
        title: "Lotus Valley Gurgaon ",
        description: "Hindi alphabet introduction textbook for primary education",
        image: "/images/categories/School Books/DPS Ka Kha Ga.jpg",
        author: "Delhi Public School Publications",
      },
      {
        title: "Mayoor School Noida and other schools",
        description: "Comprehensive English language and literature textbook for middle school students",
        image: "/images/categories/School Books/English.jpg",
        author: "National Education Board",
      },
      {
        title: "EVS",
        description: "Environmental Studies textbook with interactive activities for primary school students",
        image: "/images/categories/School Books/EVS.jpg",
        author: "Green Education Initiative",
      },
      {
        title: "Workbook",
        description: "Practice workbooks and assignment sheets",
        image: "/images/categories/School Books/Hindi.jpg",
        author: "National Language Council",
      },
      {
        title: "Lotus Valley Capital Letters",
        description: "English capital letters writing practice workbook for kindergarten students",
        image: "/images/categories/School Books/Lotus Valley Capital Letters.jpg",
        author: "Lotus Valley Educational Press",
      },
      {
        title: "Lotus Valley Small Letters",
        description: "English small letters writing and recognition workbook for early learners",
        image: "/images/categories/School Books/Lotus Valley Small Letters.jpg",
        author: "Lotus Valley Educational Press",
      },
      {
        title: "Mayoor Early Maths",
        description: "Foundational mathematics concepts and exercises for primary education",
        image: "/images/categories/School Books/Mayoor Early Maths.jpg",
        author: "Mayoor School Publications",
      },
      {
        title: "Mayoor Letters & Sounds",
        description: "Phonics and letter recognition workbook for early readers",
        image: "/images/categories/School Books/Mayoor Letters & Sounds.jpg",
        author: "Mayoor School Publications",
      },
    ],
  },
  {
    id: "Children's Books in Regional Languages",
    name: "Children's Books in Regional Languages",
    description: "Educational and entertaining books for children in multiple Indian languages",
    images: [
      {
        title: "Gujarati Spring",
        description: "A colorful children's book depicting spring season in Gujarati language",
        image: "/images/categories/Children's Books in Regional Languages/gujarati-spring.jpeg",
        author: "Read India Books",
      },
      {
        title: "Telugu Summer",
        description: "Children's book about summer activities in Telugu language",
        image: "/images/categories/Children's Books in Regional Languages/telugu-summer.jpeg",
        author: "Read India Books",
      },
      {
        title: "Punjabi Monsoon",
        description: "Educational book about monsoon season in Punjabi language",
        image: "/images/categories/Children's Books in Regional Languages/punjabi-monsoon.jpeg",
        author: "Read India Books",
      },
      {
        title: "Hindi Monsoon",
        description: "Educational book about monsoon season in Hindi language",
        image: "/images/categories/Children's Books in Regional Languages/hindi-monsoon.jpeg",
        author: "Read India Books",
      },
      {
        title: "Urdu Winter",
        description: "Children's book about winter season in Urdu language",
        image: "/images/categories/Children's Books in Regional Languages/urdu-winter.jpeg",
        author: "Read India Books",
      },
      {
        title: "Guddu Learns to Ride",
        description: "Story about a boy learning to ride a bicycle in Hindi",
        image: "/images/categories/Children's Books in Regional Languages/guddu-learns-to-ride-hindi.jpeg",
        author: "Arvind Passi & Subinita Deshmukh",
      },
      {
        title: "Bengali Spring",
        description: "Educational book about spring season in Bengali language",
        image: "/images/categories/Children's Books in Regional Languages/bengali-spring.jpeg",
        author: "Read India Books",
      },
      {
        title: "Guddu Learns to Ride (Telugu)",
        description: "Story about a boy learning to ride a bicycle in Telugu",
        image: "/images/categories/Children's Books in Regional Languages/guddu-learns-to-ride-telugu.jpeg",
        author: "Arvind Passi & Amit Adhikari",
      },
      {
        title: "Guddu and the Mangoes",
        description: "Story about a boy's adventure with mangoes in Hindi",
        image: "/images/categories/Children's Books in Regional Languages/guddu-and-the-mangoes-hindi.jpeg",
        author: "Arvind Passi & Subinita Deshmukh",
      },
    ],
  },
]

// Filter out categories with no images for display
export const getDisplayableCategories = () => {
  return portfolioCategories.filter((category) => category.images.length > 0)
}
