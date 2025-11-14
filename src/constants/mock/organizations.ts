import type { Organization } from "@/lib/types";

export const ORGANIZATIONS: Organization[] = [
  {
    id: "1",
    name: "Innovate Solutions Inc.",
    description:
      "Leading the future of AI-driven document management with cutting-edge technology and robust security.",
    memberCount: 12,
  },
  {
    id: "2",
    name: "Global Data Hub",
    description:
      "Secure and efficient data processing for large enterprises, ensuring compliance and scalability.",
    memberCount: 8,
  },
  {
    id: "3",
    name: "Quantum Analytics Co.",
    description:
      "Advanced analytics for strategic business insights, transforming raw data into actionable intelligence.",
    memberCount: 25,
  },
  {
    id: "4",
    name: "Eco-Tech Innovations",
    description:
      "Sustainable solutions through intelligent document processing and environmental responsibility.",
    memberCount: 5,
  },
  {
    id: "5",
    name: "Fusion Systems Group",
    description:
      "Integrating diverse data sources for unified insights, enabling streamlined operational workflows.",
    memberCount: 18,
  },
  {
    id: "6",
    name: "Pioneer Research Labs",
    description:
      "Frontier research in AI and machine learning for document analysis, pushing the boundaries of discovery.",
    memberCount: 7,
  },
  {
    id: "7",
    name: "Digital Transformation Corp.",
    description:
      "Empowering businesses with seamless digital transitions and innovative technological adoption.",
    memberCount: 20,
  },
  {
    id: "8",
    name: "Cloud Native Solutions",
    description:
      "Building scalable and resilient cloud infrastructure for the modern enterprise.",
    memberCount: 15,
  },
] as const;
