const programsData = [
  // ================= ENGINEERING =================
  {
    id: 1,
    title: "B.Tech in Computer Science",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Build software, apps, and scalable systems.\nWork in AI, web, and cloud technologies.\nHigh demand across tech industries worldwide.",
  },
  {
    id: 2,
    title: "B.Tech in Electronics & Communication",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Design communication and electronic systems.\nWork with circuits, signals, and embedded tech.\nOpportunities in telecom and core industries.",
  },
  {
    id: 3,
    title: "B.Tech in Mechanical Engineering",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Understand machines, engines, and manufacturing.\nWork in automotive, robotics, and production.\nCore engineering field with wide applications.",
  },
  {
    id: 4,
    title: "B.Tech in Civil Engineering",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Design buildings, roads, and infrastructure.\nWork on construction and urban development.\nEssential role in nation-building projects.",
  },
  {
    id: 5,
    title: "B.Tech in Information Technology",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Focus on software systems and networking.\nWork in IT services, cybersecurity, and cloud.\nStrong career growth in digital industries.",
  },
  {
    id: 6,
    title: "B.Tech in Electrical Engineering",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Study power systems and electrical machines.\nWork in energy, automation, and electronics.\nCore field with stable career opportunities.",
  },
  {
    id: 7,
    title: "B.Tech in AI & ML",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Work on artificial intelligence and machine learning.\nBuild smart systems and predictive models.\nOne of the fastest-growing tech domains.",
  },
  {
    id: 8,
    title: "B.Tech in Data Science",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Analyze data to drive business decisions.\nWork with analytics, statistics, and AI tools.\nHigh demand across industries worldwide.",
  },
  {
    id: 9,
    title: "B.Tech in Cyber Security",
    category: "Engineering",
    image: "/src/assets/images/engineering.png",
    description:
      "Protect systems from cyber threats and attacks.\nWork in ethical hacking and data protection.\nCritical role in digital security ecosystem.",
  },


  // ================= MEDICAL =================
  {
    id: 10,
    title: "MBBS",
    category: "Medical",
    image: "/src/assets/images/medical.png",
    description:
      "Become a doctor and treat patients.\nLearn clinical skills and medical science.\nHighly respected and impactful profession.",
  },
  {
    id: 11,
    title: "BDS (Dental)",
    category: "Medical",
    image: "/src/assets/images/medical.png",
    description:
      "Specialize in dental care and oral health.\nPerform surgeries and treatments for patients.\nCareer in clinics or private practice.",
  },
  {
    id: 12,
    title: "B.Pharma",
    category: "Medical",
    image: "/src/assets/images/medical.png",
    description:
      "Study medicines and drug formulations.\nWork in pharma companies and research labs.\nGrowing industry with global opportunities.",
  },
  {
    id: 13,
    title: "M.Pharma",
    category: "Medical",
    image: "/src/assets/images/medical.png",
    description:
      "Advanced study in pharmaceutical sciences.\nFocus on research and drug development.\nIdeal for specialization and higher roles.",
  },
  {
    id: 14,
    title: "Pharm.D",
    category: "Medical",
    image: "/src/assets/images/medical.png",
    description:
      "Clinical-focused pharmacy program.\nWork directly with patients and doctors.\nBlend of healthcare and pharmaceutical practice.",
  },
  {
  id: 201,
  title: "B.Sc Nursing",
  category: "Medical",
  image: "/src/assets/images/medical.png",
  description:
    "Provide patient care and medical support.\nWork in hospitals and healthcare centers.\nStable and respected healthcare career.",
},
{
  id: 202,
  title: "BAMS (Ayurveda)",
  category: "Medical",
  image: "/src/assets/images/medical.png",
  description:
    "Study traditional Indian medicine.\nWork in holistic healthcare and clinics.\nGrowing demand in alternative medicine.",
},
{
  id: 203,
  title: "BHMS (Homeopathy)",
  category: "Medical",
  image: "/src/assets/images/medical.png",
  description:
    "Treat patients using homeopathic methods.\nFocus on natural and holistic healing.\nCareer in clinics and private practice.",
},
{
  id: 204,
  title: "BPT (Physiotherapy)",
  category: "Medical",
  image: "/src/assets/images/medical.png",
  description:
    "Help patients recover from injuries.\nWork in rehabilitation and therapy centers.\nGrowing demand in sports and healthcare.",
},
{
  id: 205,
  title: "BMLT (Medical Lab Technology)",
  category: "Medical",
  image: "/src/assets/images/medical.png",
  description:
    "Conduct lab tests and diagnostics.\nWork in hospitals and pathology labs.\nEssential role in medical analysis.",
},
{
  id: 206,
  title: "B.Sc Radiology",
  category: "Medical",
  image: "/src/assets/images/medical.png",
  description:
    "Operate imaging technologies like X-ray and MRI.\nWork in hospitals and diagnostic centers.\nHigh demand technical healthcare role.",
},

  // ================= MANAGEMENT =================
  {
    id: 15,
    title: "MBA in Finance",
    category: "Others",
    image: "/src/assets/images/management.png",
    description:
      "Learn financial management and investments.\nWork in banking, finance, and consulting.\nHigh-paying roles in corporate sector.",
  },
  {
    id: 16,
    title: "MBA in Marketing",
    category: "Others",
    image: "/src/assets/images/management.png",
    description:
      "Master branding, sales, and market strategy.\nWork in advertising and business growth roles.\nDynamic field with creative opportunities.",
  },
  {
    id: 17,
    title: "MBA in Human Resources",
    category: "Others",
    image: "/src/assets/images/management.png",
    description:
      "Manage hiring, training, and employee relations.\nWork in corporate HR and talent management.\nKey role in organizational success.",
  },
  {
    id: 18,
    title: "MBA in Business Analytics",
    category: "Others",
    image: "/src/assets/images/management.png",
    description:
      "Use data to guide business decisions.\nWork with analytics tools and insights.\nHigh demand in data-driven companies.",
  },
  {
    id: 19,
    title: "BBA",
    category: "Others",
    image: "/src/assets/images/management.png",
    description:
      "Foundation in business and management.\nLearn marketing, finance, and operations.\nGreat start for MBA or corporate roles.",
  },

  // ================= LAW =================
  {
    id: 20,
    title: "LLB",
    category: "Others",
    image: "/src/assets/images/law.png",
    description:
      "Study legal systems and laws.\nPractice as a lawyer or legal advisor.\nCareer in courts, firms, or corporate law.",
  },
  {
    id: 21,
    title: "LLM",
    category: "Others",
    image: "/src/assets/images/law.png",
    description:
      "Advanced specialization in law fields.\nFocus on corporate, criminal, or international law.\nBoost career with higher expertise.",
  },
  {
    id: 22,
    title: "B.A. LLB",
    category: "Others",
    image: "/src/assets/images/law.png",
    description:
      "Integrated law program with arts.\nStrong foundation in legal and social subjects.\nDirect path to legal profession.",
  },

  // ================= SCIENCE =================
  {
    id: 23,
    title: "B.Sc in Biotechnology",
    category: "Others",
    image: "/src/assets/images/science.png",
    description:
      "Study biology with technology applications.\nWork in labs, pharma, and research.\nGrowing field in healthcare and science.",
  },
  {
    id: 24,
    title: "B.Sc in Physics",
    category: "Others",
    image: "/src/assets/images/science.png",
    description:
      "Understand laws of nature and universe.\nWork in research, teaching, or tech fields.\nStrong base for advanced studies.",
  },
  {
    id: 25,
    title: "B.Sc in Mathematics",
    category: "Others",
    image: "/src/assets/images/science.png",
    description:
      "Develop analytical and problem-solving skills.\nUseful in finance, data, and research.\nCore subject with wide applications.",
  },
  {
    id: 26,
    title: "M.Sc",
    category: "Others",
    image: "/src/assets/images/science.png",
    description:
      "Advanced specialization in science subjects.\nFocus on research and academic careers.\nOpens opportunities in higher studies.",
  },

  // ================= ARTS =================
  {
    id: 27,
    title: "B.A",
    category: "Others",
    image: "/src/assets/images/arts.png",
    description:
      "Study humanities and social sciences.\nBuild skills in communication and analysis.\nFlexible career options across fields.",
  },
  {
    id: 28,
    title: "M.A",
    category: "Others",
    image: "/src/assets/images/arts.png",
    description:
      "Advanced study in arts and humanities.\nFocus on research and specialization.\nIdeal for teaching and academic careers.",
  },
  {
    id: 29,
    title: "Psychology",
    category: "Others",
    image: "/src/assets/images/arts.png",
    description:
      "Study human behavior and mental processes.\nWork in counselling and therapy.\nGrowing demand in healthcare sector.",
  },

  // ================= COMMERCE =================
  {
    id: 30,
    title: "B.Com",
    category: "Others",
    image: "/src/assets/images/commerce.png",
    description:
      "Learn accounting, finance, and business laws.\nWork in finance, auditing, and taxation.\nPopular choice for commerce students.",
  },

  // ================= TECH =================
  {
    id: 31,
    title: "BCA",
    category: "Others",
    image: "/src/assets/images/online.png",
    description:
      "Focus on computer applications and coding.\nWork in software and IT industries.\nGreat alternative to engineering.",
  },
  {
    id: 32,
    title: "MCA",
    category: "Others",
    image: "/src/assets/images/online.png",
    description:
      "Advanced computer application program.\nSpecialize in software development.\nStrong career in IT sector.",
  },

  // ================= DESIGN =================
  {
    id: 33,
    title: "B.Des",
    category: "Others",
    image: "/src/assets/images/design.png",
    description:
      "Learn design thinking and creativity.\nWork in UI/UX, fashion, or product design.\nCreative field with growing demand.",
  },
  {
    id: 34,
    title: "B.Arch",
    category: "Others",
    image: "/src/assets/images/design.png",
    description:
      "Design buildings and architectural spaces.\nWork in construction and urban planning.\nBlend of creativity and engineering.",
  },

  // ================= EDUCATION =================
  {
    id: 35,
    title: "B.Ed",
    category: "Others",
    image: "/src/assets/images/education.png",
    description:
      "Train to become a professional teacher.\nLearn teaching methods and classroom skills.\nRequired for teaching careers.",
  },

  // ================= DIPLOMA =================
  {
    id: 36,
    title: "PGDM",
    category: "Others",
    image: "/src/assets/images/management.png",
    description:
      "Industry-focused management program.\nLearn practical business skills.\nStrong placement opportunities in corporates.",
  },

  // ================= DOCTORAL =================
  {
    id: 37,
    title: "Ph.D",
    category: "Others",
    image: "/src/assets/images/research.png",
    description:
      "Highest level of academic qualification.\nFocus on research and innovation.\nCareer in academia and advanced research.",
  },

];

export default programsData;