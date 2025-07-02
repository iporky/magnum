export interface GalleryImage {
  title: string
  description: string
  image: string
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
        title: "Wow! A Mosaic of Trivia and Tales from the Music World",
        description: "Short-run Self-published Book that looks Offset-printed",
        image: "/images/categories/Self-publishing/Book Publishing in Delhi.jpg"
      },
      {
        title: "Coffee Table Book Printing with Laser-cut Wood Frame",
        description: "Specialized printing techniques—digital and offset—for high-quality coffee table and art books",
        image: "/images/categories/Self-publishing/Coffee table book printing.jpg"
      },
      {
        title: "The Struggles of a Bonsai",
        description: "Self-published Autobiography of Dr B.D. Bhushan",
        image: "/images/categories/Self-publishing/Digital printing solutions.jpg"
      },
      {
        title: "Don't Go To Prison After College",
        description: "Self-published career guidance book",
        image: "/images/categories/Self-publishing/Don't go to prison after college.jpg"
      },
      {
        title: "Sanchi Rediscovered",
        description: "Hardcover book that was self-published after a trunk with old documents was found in the attic",
        image: "/images/categories/Self-publishing/Hardcover book printing.jpg"
      },
      {
        title: "Best Foot Forward",
        description: "A large pictorial travelogue made by an Australian as a Christmas gift for friends and family. Good job, good job... was repeated about a dozen times after she received the books",
        image: "/images/categories/Self-publishing/High-quality offset printing.jpg"
      },
      {
        title: "Click!",
        description: "Short stories about human relationships and their journeys, written in a sensitive and reflective manner during the Covid lockdown",
        image: "/images/categories/Self-publishing/Self Publishing.jpg"
      },
      {
        title: "A Study of Human Emotions",
        description: "Hardcover printing of doctoral book",
        image: "/images/categories/Self-publishing/Self-publishing.jpg"
      },
      {
        title: "Spiritual Laws Of Nature",
        description: "Self-published exploration of spirituality and natural phenomena",
        image: "/images/categories/Self-publishing/Spiritual Laws Of Nature_custom publishing.jpg"
      }
    ]
  },
  {
    id: "think-tanks-defence-security",
    name: "Think Tanks, Defence and Security Issues",
    description: "Research publications on defence strategies, security studies, and policy analysis",
    images: [
      {
        title: "Balochistan: Forgotten War, Forsaken People",
        description: "Analysis of the ongoing conflict in Balochistan and its geopolitical implications",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Balochistan-Forgotten War, Forsaken People.jpg"
      },
      {
        title: "Changing Security Dynamics in Southeast Asia",
        description: "Examination of emerging security challenges and strategic realignments in Southeast Asia",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Changing Security Dynamics in Southeast Asia.jpg"
      },
      {
        title: "India's Israel Policy",
        description: "Historical analysis and future prospects of India-Israel diplomatic and defence relations",
        image: "/images/categories/Think Tanks, Defence and Security Issues/India's Israel Policy.jpg"
      },
      {
        title: "Internal Security: Structure and Response Mechanisms",
        description: "Comprehensive overview of India's internal security framework and crisis response systems",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Internal Security - Structure and Response Mechanisms.jpg"
      },
      {
        title: "Make In India",
        description: "Strategic assessment of defence manufacturing initiatives under the Make in India programme",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Make In India.jpg"
      },
      {
        title: "Maritime Security: The Unlawful Dimension",
        description: "Analysis of maritime terrorism, piracy, and illegal activities in international waters",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Maritime Security-The Unlawful Dimension.jpg"
      },
      {
        title: "Net Security Provider: India's Out-of-Area Contingency Operations",
        description: "Study of India's emerging role in international security operations beyond its borders",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Net Security Provider - India's Out-of-Area Contigency Operations.jpg"
      },
      {
        title: "Pakistan on the Edge",
        description: "Strategic assessment of Pakistan's internal security challenges and regional implications",
        image: "/images/categories/Think Tanks, Defence and Security Issues/Pakistan on the Edge.jpg"
      },
      {
        title: "The Future of War and Peace in Asia",
        description: "Forward-looking analysis of emerging conflict scenarios and peace initiatives in Asia",
        image: "/images/categories/Think Tanks, Defence and Security Issues/The Future of War and Peace in Asia.jpg"
      }
    ]
  },
  {
    id: "global-consultants-trade-organisations",
    name: "Global Consultants, Trade Organizations",
    description: "Reports, white papers, and publications for international consultants and trade organizations",
    images: [
      {
        title: "Asset Management",
        description: "Comprehensive guide to modern asset management strategies for global organizations",
        image: "/images/categories/Global Consultants, Trade Organizations/Asset Management.jpg"
      },
      {
        title: "ATMA – Winning in the Global Tyre Industry",
        description: "Insights into the global tyre industry and strategies for success",
        image: "/images/categories/Global Consultants, Trade Organizations/ATMA-Winning in the global tyre industry.jpg"
      },
      {
        title: "B20 India – Decarbonising the Emerging G20 Nations",
        description: "B20 India report on decarbonisation strategies for G20 nations",
        image: "/images/categories/Global Consultants, Trade Organizations/B20 India - Decarbonising the Emerging G20 nations.jpg"
      },
      {
        title: "Booking.com – How India Travels 2024",
        description: "Booking.com report on travel trends in India for 2024",
        image: "/images/categories/Global Consultants, Trade Organizations/Booking.com - How India Travels 2024.jpg"
      },
      {
        title: "The Cairn Way Principles of Project Delivery",
        description: "Cairn's approach to project delivery and management",
        image: "/images/categories/Global Consultants, Trade Organizations/Cairn Way of Project Delivery.jpg"
      },
      {
        title: "Democratising Digital Commerce in India",
        description: "ONDC report on digital commerce transformation in India",
        image: "/images/categories/Global Consultants, Trade Organizations/Democratising digital commerce in India_ONDC.jpg"
      },
      {
        title: "Making India the Global Manufacturing Powerhouse for Mobile Handsets and Components",
        description: "India Cellular and Electronics Association's industry analysis and recommendations",
        image: "/images/categories/Global Consultants, Trade Organizations/ICEA Report.jpg"
      },
      {
        title: "Digitizing Make in India",
        description: "Matrix report on state of the B2B sector",
        image: "/images/categories/Global Consultants, Trade Organizations/Matrix - Digitizing Make in India.jpg"
      },
      {
        title: "Nasscom – Perspective 2025: Shaping the Digital Revolution",
        description: "Future outlook for India's IT and business services industry through 2025",
        image: "/images/categories/Global Consultants, Trade Organizations/Nasscom - Perspective 2025.jpg"
      }
    ]
  },
  {
    id: "foreign-languages",
    name: "Foreign Languages",
    description: "Publications in French, Russian, Spanish and other foreign languages",
    images: [
      {
        title: "Technologies for Climate Change Adaptation – The Agriculture Sector",
        description: "Guide to sustainable agricultural practices adapted for climate change in French",
        image: "/images/categories/Foreign Languages/French Agriculture adaptation.jpg"
      },
      {
        title: "Technologies for Climate Change Adaptation – Coastal Erosion and Flooding",
        description: "Research publication on coastal erosion prevention and management in French",
        image: "/images/categories/Foreign Languages/French Coastal Erosion.jpg"
      },
      {
        title: "Enhancing Implementation of Technology Needs Assessments Guidance for Preparing a Technology Action Plan",
        description: "Technical assistance programme guidance document for climate initiatives in French",
        image: "/images/categories/Foreign Languages/French-TAP Guidance.jpg"
      },
      {
        title: "Technologies for Climate Change Mitigation – Agriculture Sector",
        description: "Guidelines for reducing climate impact in agricultural practices in Russian",
        image: "/images/categories/Foreign Languages/Russian Agriculture Mitigation.jpg"
      },
      {
        title: "Technologies for Climate Change Mitigation – Building Sector",
        description: "Energy efficient building codes and standards publication in Russian",
        image: "/images/categories/Foreign Languages/Russian-Building.jpg"
      },
      {
        title: "Technologies for Climate Change Mitigation – Transport Sector",
        description: "Sustainable transportation planning guide in Russian",
        image: "/images/categories/Foreign Languages/Russian_Transport.jpg"
      },
      {
        title: "NAMA Information and Guidebook",
        description: "Enabling implementation of Nationally Determined Contributions through Nationally Appropriate Mitigation Actions in Spanish",
        image: "/images/categories/Foreign Languages/Spanish_NAMA Guidebook.jpg"
      },
      {
        title: "Good Practice in Designing and Implementing National Monitoring Systems for Adaptation to Climate Change",
        description: "Framework for monitoring climate adaptation initiatives in Spanish",
        image: "/images/categories/Foreign Languages/SPANISH_National Monitoring Systems for Adaptation.jpg"
      },
      {
        title: "Technologies for Climate Change Adaptation – The Water Sector",
        description: "Water resource management strategies for climate adaptation in Spanish",
        image: "/images/categories/Foreign Languages/Spanish_Water Sector_Adaptation.jpg"
      }
    ]
  },
  {
    id: "Climate Change Mitigation and Adaptation",
    name: "Climate Change Mitigation and Adaptation",
    description: "Research publications and reports on climate change solutions and environmental studies",
    images: [
      {
        title: "Balancing Energy, Development and Climate Priorities in India",
        description: "UNEP publication analyzing current trends and future projections for sustainable development in India",
        image: "/images/categories/Climate Change Mitigation and Adaptation/energy-development-climate-priorities-india.jpeg"
      },
      {
        title: "Enhancing Energy Efficiency in India: Assessment of Sectoral Potentials",
        description: "Comprehensive assessment of energy efficiency opportunities across various sectors in India",
        image: "/images/categories/Climate Change Mitigation and Adaptation/enhancing-energy-efficiency-india.jpeg"
      },
      {
        title: "A Toolkit for Preparation of Low Carbon Mobility Plan",
        description: "UNEP DTU Partnership toolkit for developing sustainable urban mobility solutions",
        image: "/images/categories/Climate Change Mitigation and Adaptation/low-carbon-mobility-plan.jpeg"
      },
      {
        title: "Energy Access Realities in Urban Poor Communities of Developing Countries",
        description: "GNESD report on energy poverty and access challenges in urban informal settlements",
        image: "/images/categories/Climate Change Mitigation and Adaptation/gnesd-energy-access-urban-poor.jpeg"
      },
      {
        title: "From Vulnerability to Resilience: The Challenge of Adaptation to Climate Change",
        description: "Multi-country case studies from Bangladesh, Brazil, China, India, South Africa and Korea",
        image: "/images/categories/Climate Change Mitigation and Adaptation/adaptation-climate-change-multi-country.jpeg"
      },
      {
        title: "Promoting Low Carbon Transport in India",
        description: "UNEP DTU Partnership publication on sustainable transportation solutions for India",
        image: "/images/categories/Climate Change Mitigation and Adaptation/low-carbon-transport-india.jpeg"
      },
      {
        title: "Good Practice in Designing and Implementing National Monitoring Systems for Adaptation to Climate Change",
        description: "CATIE and CTCN guide for developing climate adaptation monitoring frameworks",
        image: "/images/categories/Climate Change Mitigation and Adaptation/monitoring-systems-adaptation.jpeg"
      },
      {
        title: "Climate-Smart Agriculture Manual for Agriculture Education in Zimbabwe",
        description: "Educational manual promoting sustainable agricultural practices and climate resilience",
        image: "/images/categories/Climate Change Mitigation and Adaptation/climate-smart-agriculture-manual.jpeg"
      },
      {
        title: "Enhancing Energy Efficiency in China: Assessment of Sectoral Potentials",
        description: "UN Environment assessment of energy efficiency opportunities across Chinese industrial sectors",
        image: "/images/categories/Climate Change Mitigation and Adaptation/enhancing-energy-efficiency-china.jpeg"
      }
    ]
  },
  {
    id: "government-of-india",
    name: "Government of India",
    description: "Official government publications, policy documents, and administrative reports",
    images: [
      {
        title: "Bureau of Indian Standards (BIS) – Promoting Quality Through Standards",
        description: "BIS informational publication in Hindi",
        image: "/images/categories/Government of India/BIS Brochure Hindi.jpg"
      },
      {
        title: " India's Trillion-Dollar Digital Opportunity",
        description: "Strategic framework for India's digital transformation initiatives",
        image: "/images/categories/Government of India/Digital India.jpg"
      },
      {
        title: "National Policy on Disaster Management",
        description: "Government policy document on emergency response to disasters",
        image: "/images/categories/Government of India/Cover Policy.jpg"
      },
      {
        title: "Bureau of Indian Standards",
        description: "Bird’s eye view of BIS’s history, present activities, major achievements in recent years and services provided to stakeholders",
        image: "/images/categories/Government of India/BIS History.jpg"
      },
      {
        title: "Revamping of Civil Defence in the Country – National Policy Approach Paper",
        description: "Official guidelines for civil defence procedures, capacity building, and emergency preparedness",
        image: "/images/categories/Government of India/Civil Defense Cover.jpg"
      },
      {
        title: "National Disaster Management Guidelines (NDMA) For Management Of Earthquakes",
        description: "Guidelines in Hindi to reduce earthquake risk, and minimise the impact, loss of lives and damage to property caused by earthquakes",
        image: "/images/categories/Government of India/Earthquake Hindi.jpg"
      },
      {
        title: "NDMA Guidelines for Medical Preparedness and Mass Casualty Management",
        description: "Guidelines for healthcare systems responding to mass casualty incidents",
        image: "/images/categories/Government of India/Medical Preparedness & Mass Casualty Management.jpg"
      },
      {
        title: "NDMA Guidelines for Management of Nuclear and Radiological Emergencies",
        description: "Safety protocols and emergency response procedures for nuclear incidents",
        image: "/images/categories/Government of India/Nuclear Cover.jpg"
      },
      {
        title: "Pandemic Preparedness Beyond Health",
        description: "Preparedness plans at all levels to mitigate probable risks and for holistic management of pandemics",
        image: "/images/categories/Government of India/Pandemic.jpg"
      }
    ]
  },
  {
    id: "Corporate Social Responsibility",
    name: "Corporate Social Responsibility",
    description: "Publications focusing on CSR initiatives, sustainability reports, and corporate governance",
    images: [
      {
        title: "Fostering Business Responsibility in MSME Clusters – Volume I",
        description: "Role of policy makers in promoting business responsibility among MSME clusters",
        image: "/images/categories/Corporate Social Responsibility/fostering-business-responsibility-vol1.jpeg"
      },
      {
        title: "Mapping Energy, Environment and Social Issues among MSME Clusters in India",
        description: "Way forward for addressing sustainability challenges in MSME clusters",
        image: "/images/categories/Corporate Social Responsibility/mapping-energy-environment-social-issues.jpeg"
      },
      {
        title: "Responsible Corporate Engagement in Rural India",
        description: "A compendium of good practices for corporate social responsibility in rural areas",
        image: "/images/categories/Corporate Social Responsibility/compendium-good-practices.jpeg"
      },
      {
        title: "Fostering Business Responsibility in MSME Clusters – Volume II",
        description: "Role of implementing agencies in fostering business responsibility in MSME clusters",
        image: "/images/categories/Corporate Social Responsibility/fostering-business-responsibility-vol2.jpeg"
      },
      {
        title: "Fostering Business Responsibility in MSME Clusters – Volume III",
        description: "Role of cluster development agents in promoting sustainable business practices",
        image: "/images/categories/Corporate Social Responsibility/fostering-business-responsibility-vol3.jpeg"
      },
      {
        title: "The Contribution of Responsible Business to Social Inclusiveness in India",
        description: "Focus on innovative approaches for responsible business practices and social inclusion",
        image: "/images/categories/Corporate Social Responsibility/responsible-business-social-inclusiveness.jpeg"
      }
    ]
  },
  {
    id: "school-books",
    name: "School Books",
    description: "Textbooks and learning materials for school curricula",
    images: [
      {
        title: "DPS – Beginning with Colours and Shapes",
        description: "Early learning textbook teaching colors and shapes recognition for preschool students",
        image: "/images/categories/School Books/DPS Colours & Shapes.jpg"
      },
      {
        title: "DPS – Beginning with Ka Kha Ga",
        description: "Hindi alphabet introduction textbook for primary students",
        image: "/images/categories/School Books/DPS Ka Kha Ga.jpg"
      },
      {
        title: "DPS Gurgaon – English Assignment Book",
        description: "English practice book for primary students",
        image: "/images/categories/School Books/English.jpg"
      },
      {
        title: "DPS Gurgaon – Maths Assignment Book",
        description: "Maths practice book for primary students",
        image: "/images/categories/School Books/EVS.jpg"
      },
      {
        title: "DPS Gurgaon – Hindi Assignment Book",
        description: "Hindi practice book for primary students",
        image: "/images/categories/School Books/Hindi.jpg"
      },
      {
        title: "Lotus Valley – Capital Letters",
        description: "English capital letters writing practice workbook for early learners",
        image: "/images/categories/School Books/Lotus Valley Capital Letters.jpg"
      },
      {
        title: "Lotus Valley – Small Letters",
        description: "English small letters writing practice workbook for early learners",
        image: "/images/categories/School Books/Lotus Valley Small Letters.jpg"
      },
      {
        title: "Mayoor School – Early Maths",
        description: "Foundational mathematics concepts and exercises for primary education",
        image: "/images/categories/School Books/Mayoor Early Maths.jpg"
      },
      {
        title: "Mayoor School – My First Steps to Letters & Sounds",
        description: "Phonics and letter recognition workbook for early readers",
        image: "/images/categories/School Books/Mayoor Letters & Sounds.jpg"
      }
    ]
  },
  {
    id: "Children's Books in Regional Languages",
    name: "Children's Books in Regional Languages",
    description: "Educational and entertaining books for children in multiple Indian languages",
    images: [
      {
        title: "Spring",
        description: "A colourful children's first reader depicting spring season in Gujarati language",
        image: "/images/categories/Children's Books in Regional Languages/gujarati-spring.jpeg"
      },
      {
        title: "Summer",
        description: "A colourful children's first reader depicting summer season in Telugu language",
        image: "/images/categories/Children's Books in Regional Languages/telugu-summer.jpeg"
      },
      {
        title: "Monsoon",
        description: "A colourful children's first reader depicting monsoon season in Punjabi language",
        image: "/images/categories/Children's Books in Regional Languages/punjabi-monsoon.jpeg"
      },
      {
        title: "Monsoon",
        description: "A colourful children's first reader depicting monsoon season in Hindi language",
        image: "/images/categories/Children's Books in Regional Languages/hindi-monsoon.jpeg"
      },
      {
        title: "Winter",
        description: "A colourful children's first reader depicting winter season in Urdu language",
        image: "/images/categories/Children's Books in Regional Languages/urdu-winter.jpeg"
      },
      {
        title: "Guddu Ki Lal Cycle", 
        description: "Story about a boy learning to ride a bicycle in Hindi language",
        image: "/images/categories/Children's Books in Regional Languages/guddu-learns-to-ride-hindi.jpeg"
      },
      {
        title: "Bengali Spring",
        description: "A colourful children's first reader depicting spring season in Bengali language",
        image: "/images/categories/Children's Books in Regional Languages/bengali-spring.jpeg"
      },
      {
        title: "Guddu Learns to Ride",
        description: "Story about a boy learning to ride a bicycle in Telugu language",
        image: "/images/categories/Children's Books in Regional Languages/guddu-learns-to-ride-telugu.jpeg"
      },
      {
        title: "Guddu aur Aam",
        description: "Story about a boy's adventures stealing mangoes from a neighbor's tree in Hindi language",
        image: "/images/categories/Children's Books in Regional Languages/guddu-and-the-mangoes-hindi.jpeg"
      }
    ]
  }
]

// Filter out categories with no images for display
export const getDisplayableCategories = () => {
  return portfolioCategories.filter((category) => category.images.length > 0)
}
