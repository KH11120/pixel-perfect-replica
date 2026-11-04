export type FacultyMember = {
  name: string;
  /** Current designation and organisation. */
  designation: string;
  /** Path under `public/` (e.g. "/faculty/jane-doe.jpg"). A neutral placeholder shows if it is missing or fails to load. */
  photo: string;
  /** Full LinkedIn profile URL, used on the card and in the Read More popup. */
  linkedinUrl: string;
  /** Two to three lines shown on the faculty card. */
  shortBio: string;
  /** Paragraphs shown under "About" in the Read More popup. */
  fullBio: string[];
};

/**
 * Faculty shown in the "Meet Your Faculty" section. Cards are generated from this list,
 * so adding a faculty member only needs another entry here.
 */
export const facultyMembers: FacultyMember[] = [
  {
    name: "Ankit Saxena",
    designation: "VP and Head of Investments, FITT IIT Delhi",
    photo: "/faculty/ankit-saxena.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ankitsaxena771/",
    shortBio:
      "Ankit Saxena works in entrepreneurship, startup ecosystem development and investment facilitation for early-stage ventures. He has also served as Head of Investments at SIIC, IIT Kanpur.",
    fullBio: [
      "Ankit Saxena is the Director of the DS Centre of Entrepreneurship at the Foundation for Innovation and Technology Transfer (FITT), Indian Institute of Technology Delhi (IIT Delhi), where he plays a key role in driving entrepreneurship, startup ecosystem development, and investment facilitation for early-stage ventures. Prior to his current role, he served as Head of Investments at the Startup Incubation and Innovation Centre (SIIC) at IIT Kanpur.",
    ],
  },
  {
    name: "Ashutosh Pastor",
    designation: "Vice President – Incubation, FITT IIT Delhi",
    photo: "/faculty/ashutosh-pastor.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ashutoshpastor/",
    shortBio:
      "An innovation enthusiast working closely with startups to support their growth through incubation, mentoring and funding initiatives. He brings experience in managing startup incubation and innovation support programmes.",
    fullBio: [
      "Ashutosh Pastor is an innovation professional working closely with startups to support their entrepreneurial journey through incubation, mentoring and funding initiatives. He is currently the Vice President – Incubation at the Foundation for Innovation and Technology Transfer (FITT), Indian Institute of Technology Delhi.",
      "With experience across startup incubation and innovation support programmes, he has held several roles at FITT, including Senior Manager and Head of Incubation, Manager – Startup Incubation, and Manager of the Biotechnology Business Incubation Facility.",
      "Trained in life sciences, Ashutosh has developed a strong interest in technology and continues to explore emerging areas across the technology landscape. His work includes programme design, programme management, startup incubation and innovation support.",
    ],
  },
  {
    name: "Rashmi Jain",
    designation: "Founder, Thinkers & Innovators Club",
    photo: "/faculty/rashmi-jain.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rashmi-jain-305a8417/",
    shortBio:
      "An innovation leader with approximately 17 years of experience across strategy consulting, product management, business leadership and entrepreneurship. She specialises in product incubation and innovation across sectors including healthcare, smart cities, education and technology.",
    fullBio: [
      "Rashmi Jain is an innovation leader with approximately 17 years of experience spanning Fortune 500 companies such as NEC Corporation and Hitachi India, strategic consulting at Monitor Consulting Group, mid-sized technology firms such as KritiKal Solutions, and entrepreneurship as the Founder of Thinkers & Innovators Club.",
      "She is Harvard Business School certified in Design Thinking and Innovation and has extensive experience in product incubation across diverse sectors.",
      "Her work spans healthcare AI, including fertility, dermatology and breast cancer detection initiatives with AIIMS; hospitality solutions involving facial recognition; smart city applications using AI video analytics; Generative AI, including large language models (LLMs) and agentic AI; education; manufacturing; and logistics.",
      "Her professional journey includes strategic consulting, corporate planning and research, product management, business leadership in AI/ML, innovation coaching and entrepreneurship.",
      "She brings experience across Indian and international markets, having led strategic initiatives involving the USA, Japan, Singapore, Saudi Arabia, Sri Lanka, Bangladesh and multiple Indian cities.",
      "Her cross-industry experience spans more than seven sectors, bringing together perspectives from FMCG and consumer research, AI-powered healthcare, smart city solutions and other technology-driven business applications.",
    ],
  },
];
