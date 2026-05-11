export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string[];
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    slug: "ashok",
    name: "Ashok Chaudhary",
    role: "Chartered Accountant",
    avatar: "/team/ashok.avif",
    linkedin: "https://www.linkedin.com/in/caashokchaudhary/",
    bio: [
      "Ashok Chaudhary is a seasoned Chartered Accountant with a diverse background with exposure to Audit, Accounts, Budgeting, MIS, Taxation and Compliances, and Payroll Execution.",
      "He has extensive experience working with professionally managed corporates as a consultant, focusing on GST-related services, including registrations, return filings, reconciliations, and audits.",
      "He has successfully guided numerous organizations through the complexities of GST compliance, helping them navigate the regulatory environment with ease.",
      "In addition to his expertise in GST, he has played a key role in assisting businesses with their corporate affairs, ensuring a seamless setup and smooth operations in India. His in-depth understanding of taxation and regulatory frameworks makes him a reliable partner for businesses seeking expert financial guidance.",
    ],
  },
  {
    slug: "praveen",
    name: "Praveen Mali",
    role: "Chartered Accountant",
    avatar: "/team/praveen.avif",
    bio: [
      "Praveen is a Chartered Accountant with more than 7 years of experience.",
      "He has experience of handling corporate affairs in different areas for over a decade.",
      "Over the years, he has played a pivotal role in helping numerous organizations establish and scale their operations. From obtaining registrations and licenses to setting up financial controls and compliance systems, Praveen has consistently ensured smooth entry and hassle-free functioning of businesses across sectors.",
      "His holistic understanding of financial, legal, and regulatory environments enables him to provide end-to-end support to companies, making him a trusted advisor for SMEs and businesses.",
    ],
  },
  {
    slug: "gagan",
    name: "Gagan Mittal",
    role: "Chartered Accountant",
    avatar: "/team/gagan.avif",
    linkedin: "https://www.linkedin.com/in/gaganmittal1/",
    bio: [
      "Gagan is a Chartered Accountant with more than 12 years of experience. In his past experience he has worked with some marquee companies like Deloitte, Amberstudent and Shah & Kathariya. His expertise lies in Virtual CFO services, Debt advisory, Financial Planning & Analysis, Payroll execution, Transaction Advisory, crafting intricate licensing agreements and meticulous legal documentation. He has helped several large organizations take important financial and strategic decisions.",
      "At Amberstudent (global student accommodation booking platform), he was working as Director of Finance and was heading finance and legal function. He managed global operations by helping setting up systems and processes from scratch for group entities in India, US, China and Dubai. He managed fund raise of Series A from Gaja Capital of approximately USD 20 Mn and Venture debt of approximately USD 3 Mn. He raised cumulative debt to the tune of approximately USD 10 Mn. He also played a key role in automating financial operations.",
      "At Deloitte, he was part of Corporate Finance & Restructuring team working across sectors and successfully completing more than 6 M&A deals with size of USD 2.4 Bn and raised debts in excess of USD 100 Mn. He was also an integral part of the team managing BPCL disinvestment for DIPAM.",
      "Prior to Deloitte, he was leading Virtual CFO services for clients with end to end execution like Rapido, Amber, Housing, Toppr, Bewakoof, Truebil, BC Jukebox, Flyrobe, Azuro, Handyhomes, Niffler, Mydidi, etc. He has experience of working with 50+ startups. He has exposure of working directly with CXOs, founders and investors.",
    ],
  },
  {
    slug: "kalpesh",
    name: "Kalpesh Virwadia",
    role: "Chartered Accountant",
    avatar: "/team/kalpesh.avif",
    bio: [
      "Kalpesh is a Chartered Accountant with more than 7 years of experience.",
      "He has vast knowledge and a thorough understanding of Indian laws and regulations, as well as the complex corporate taxation system.",
      "He has successfully navigated the complexities of corporate tax compliance, strategic tax planning, and regulatory adherence for several clients and managed intricate tax matters for diverse industries, ensuring optimal tax positions while maintaining full compliance with Indian tax laws.",
      "Represented clients in proceedings before tax authorities, successfully resolving disputes and minimizing potential penalties.",
      "Conducted comprehensive tax due diligence for clients in several sectors, identifying potential tax exposures and advising on mitigation strategies.",
    ],
  },
  {
    slug: "aditi",
    name: "Aditi Mittal",
    role: "CA, CS, IBBI Reg RV",
    avatar: "/team/aditi.avif",
    linkedin: "https://www.linkedin.com/in/aditimittalvaluations/",
    bio: [
      "Aditi A Mittal is a qualified Chartered Accountant, Company Secretary and Registered Valuer from IBBI, India.",
      "Her motivation is to leverage skills in the Finance & Compliance domain to assist Business Owners/Founders, investors, and CFOs to scale up, monetize or help them partner effectively with the business. She has closely worked with CXOs, Board and Finance Professionals across industry verticals, business sizes, stage of growth and seen a variety of business and finance situations.",
      "She has previously headed finance & Compliance in companies like Loginext, Care24 India and Grofers India. Her expertise lies in business valuation, financial modelling, intangible valuations, brand valuation and ESOP valuation.",
      "She has worked with several startups helping them with their valuation advisory and preparing business plans.",
    ],
  },
];
