export interface GeneralFAQ {
  id: string;
  category: "General" | "Services" | "Security" | "CloudOS" | "Engagement";
  question: string;
  answer: string;
}

export const generalFaqs: GeneralFAQ[] = [
  {
    id: "g1",
    category: "General",
    question: "What does ARAVANTA TECH do?",
    answer:
      "ARAVANTA TECH is a modern technology company helping businesses simplify technology, modernize digital infrastructure, develop high-performance software applications, improve operational efficiency, and architect cloud-native solutions. We also lead the Aravanta CloudOS platform initiative.",
  },
  {
    id: "g2",
    category: "General",
    question: "What is the meaning behind 'Simpler. Safer. Smarter.'?",
    answer:
      "It represents our engineering philosophy. 'Simpler' means removing unnecessary architectural bloat and convoluted workflows. 'Safer' means treating security as an intrinsic foundation through zero-trust boundaries and defensive design. 'Smarter' means building scalable systems that directly drive business outcomes without wasteful overhead.",
  },
  {
    id: "s1",
    category: "Services",
    question: "How do your service engagements typically work?",
    answer:
      "We begin with a thorough technical discovery and architecture assessment to understand your business objectives and existing systems. Next, we deliver a concrete reference design and phased roadmap. From there, we either execute hands-on engineering alongside your team or deliver complete turnkey solutions with comprehensive documentation and operational handover.",
  },
  {
    id: "s2",
    category: "Services",
    question: "Can ARAVANTA TECH work alongside our existing internal engineers?",
    answer:
      "Yes. Many of our engagements are collaborative co-engineering partnerships. We embed with internal teams, introduce modern DevOps and architectural standards, and elevate internal capability while delivering critical project milestones.",
  },
  {
    id: "s3",
    category: "Services",
    question: "Do you only work with large enterprise clients or also high-growth teams?",
    answer:
      "We partner with both established mid-to-large enterprises seeking legacy modernization and high-growth scale-ups requiring resilient, scalable infrastructure from day one.",
  },
  {
    id: "sec1",
    category: "Security",
    question: "How do you protect sensitive corporate data and credentials during projects?",
    answer:
      "We adhere to strict confidentiality protocols and least-privilege access rules. We never hardcode secrets, we enforce multi-factor authentication and role-based access controls, and we sign comprehensive Non-Disclosure Agreements (NDAs) prior to reviewing any proprietary code or infrastructure.",
  },
  {
    id: "c1",
    category: "CloudOS",
    question: "What is Aravanta CloudOS and when can our team access it?",
    answer:
      "Aravanta CloudOS is our cloud platform initiative currently in active architectural development. It is engineered to unify infrastructure provisioning, policy enforcement, and operational telemetry into a clean control plane. Interested enterprise teams can request early technical briefings through our contact page.",
  },
  {
    id: "e1",
    category: "Engagement",
    question: "How quickly can we initiate a technical consultation?",
    answer:
      "Upon submitting your inquiry through our Contact page, a senior technical lead reviews your requirements and responds within one business day to schedule a 30-minute scoping discussion.",
  },
];
