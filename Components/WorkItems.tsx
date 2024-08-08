import { StaticImageData } from "next/image";
import dateIcon from "../public/assets/date-icon.png";
import bagIcon from "../public/assets/bag-icon.png";
import userIcon from "../public/assets/user-icon-2.png";

export interface WorkItem {
  title: string[];
  description: string[];
  image: string[];
  tag: string[];
  tagIcons: StaticImageData[];
}

const commonTitles = [
  "Background",
  "Objective",
  "Iterative Prototyping",
  "Results",
  "Conclusion",
];

const commonDescription = [
  "The objective of Orion is to develop and deliver advanced technological solutions that simplify complex processes, enhance efficiency, and improve overall productivity for businesses across various industries. Through a combination of research, development, and collaboration, NovaTech aims to push the boundaries of innovation and set new standards in the tech industry.",
  "Iterative prototyping played a vital role in refining the design based on user testing and feedback. This agile approach allowed for early identification and resolution of any potential issues, ensuring the final design met the highest standards for user experience.",
  "Throughout the design process, the focus was on creating a brand identity that reflects the company's commitment to innovation, reliability, and forward-thinking. The use of sleek and modern design elements, such as futuristic fonts and dynamic imagery, helps convey the brand's progressive nature. Overall, the design reflects NovaTech's position as a leading provider of cutting-edge solutions.",
];

const tagIcons = [bagIcon, userIcon, dateIcon];

export const workItems: WorkItem[] = [
  {
    title: ["Zephyr", ...commonTitles],
    description: [
      "Zephyr, a dynamic payments platform, initiated a partnership with our design team to revamp its website. The objective was to address usability concerns, improve overall user experience, and modernize the platform's visual interface. The existing website required a comprehensive redesign to align with industry standards.",
      ...commonDescription,
      "The redesigned platform achieved its goals successfully. User engagement increased by X%, and positive feedback highlighted the improved efficiency in completing transactions. The modern design not only aligned with industry expectations but also positioned them as a secure and user-friendly payments solution.",
    ],
    image: [
      "/assets/zephyr1.png",
      "/assets/zephyr2.png",
      "/assets/zephyr3.png",
    ],
    tag: ["Branding & App", "Zephyr Band", "2022"],
    tagIcons,
  },
  {
    title: ["NovaTech", ...commonTitles],
    description: [
      "NovaTech Solutions was founded by a team of tech enthusiasts with a passion for innovation and problem-solving. The founders came from diverse backgrounds in engineering, software development, and business, and they united under the common goal of creating cutting-edge solutions to address modern challenges.",
      ...commonDescription,
    ],
    image: [
      "/assets/novatech1.png",
      "/assets/novatech2.png",
      "/assets/novatech3.png",
    ],
    tag: ["Website & App", "Nova Inc.", "2023"],
    tagIcons,
  },
  {
    title: ["Orion", ...commonTitles],
    description: [
      "Orion was founded by a team of tech enthusiasts with a passion for innovation and problem-solving. The founders came from diverse backgrounds in engineering, software development, and business, and they united under the common goal of creating cutting-edge solutions to address modern challenges.",
      ...commonDescription,
      "The redesigned platform achieved its goals successfully. User engagement increased by X%, and positive feedback highlighted the improved efficiency in completing transactions. The modern design not only aligned with industry expectations but also positioned them as a secure and user-friendly payments solution.",
    ],
    image: ["/assets/orion1.png", "/assets/orion2.png", "/assets/orion3.png"],
    tag: ["App & Website", "Orion's Belt", "2024"],
    tagIcons,
  },
  {
    title: ["ArtFest24", ...commonTitles],
    description: [
      "ArtsFest24 was founded by a team of tech enthusiasts with a passion for innovation and problem-solving. The founders came from diverse backgrounds in engineering, software development, and business, and they united under the common goal of creating cutting-edge solutions to address modern challenges.",
      ...commonDescription,
      "The redesigned platform achieved its goals successfully. User engagement increased by X%, and positive feedback highlighted the improved efficiency in completing transactions. The modern design not only aligned with industry expectations but also positioned them as a secure and user-friendly payments solution.",
    ],
    image: [
      "/assets/ArtsFest1.png",
      "/assets/ArtsFest2.png",
      "/assets/ArtsFest3.png",
    ],
    tag: ["Branding & Posters", "FestGlobal", "2024"],
    tagIcons,
  },
];
