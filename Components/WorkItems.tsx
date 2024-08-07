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

export const workItems: WorkItem[] = [
  {
    title: [
      "Zephyr",
      "Background",
      "Objective",
      "Iterative Prototyping",
      "Results ",
      "Conclusion",
    ],
    description: [
      "Zephyr, a dynamic payments platform, initiated a partnership with our design team to revamp its website. The objective was to address usability concerns, improve overall user experience, and modernize the platform's visual interface. The existing website required a comprehensive redesign to align with industry standards.",
      "The objective of Orion is to develop and deliver advanced technological solutions that simplify complex processes, enhance efficiency, and improve overall productivity for businesses across various industries. Through a combination of research, development, and collaboration, NovaTech aims to push the boundaries of innovation and set new standards in the tech industry.",
      "Iterative prototyping played a vital role in refining the design based on user testing and feedback. This agile approach allowed for early identification and resolution of any potential issues, ensuring the final design met the highest standards for user experience.",
      "The redesigned platform achieved its goals successfully. User engagement increased by X%, and positive feedback highlighted the improved efficiency in completing transactions. The modern design not only aligned with industry expectations but also positioned them as a secure and user-friendly payments solution.",
      "Throughout the design process, the focus was on creating a brand identity that reflects the company's commitment to innovation, reliability, and forward-thinking. The use of sleek and modern design elements, such as futuristic fonts and dynamic imagery, helps convey the brand's progressive nature. Overall, the design reflects NovaTech's position as a leading provider of cutting-edge solutions.",
    ],
    image: ["/assets/zephyr1.png","/assets/zephyr2.png","/assets/zephyr3.png"],
    tag: ["Branding & App", "Zephyr Band", "2022"],
    tagIcons: [bagIcon, userIcon, dateIcon],
  },
  {
    title: [
      "NovaTech",
      "Background",
      "Objective",
      "Iterative Prototyping",
      "Conclusion",
    ],
    description: [
      "NovaTech Solutions was founded by a team of tech enthusiasts with a passion for innovation and problem-solving. The founders came from diverse backgrounds in engineering, software development, and business, and they united under the common goal of creating cutting-edge solutions to address modern challenges.",
      "The objective of Orion is to develop and deliver advanced technological solutions that simplify complex processes, enhance efficiency, and improve overall productivity for businesses across various industries. Through a combination of research, development, and collaboration, NovaTech aims to push the boundaries of innovation and set new standards in the tech industry.",
      "Iterative prototyping played a vital role in refining the design based on user testing and feedback. This agile approach allowed for early identification and resolution of any potential issues, ensuring the final design met the highest standards for user experience.",
      "Throughout the design process, the focus was on creating a brand identity that reflects the company's commitment to innovation, reliability, and forward-thinking. The use of sleek and modern design elements, such as futuristic fonts and dynamic imagery, helps convey the brand's progressive nature. Overall, the design reflects NovaTech's position as a leading provider of cutting-edge solutions."
    ],
    image: ["/assets/novatech1.png","/assets/novatech2.png","/assets/novatech3.png"],
    tag: ["Website & App", "Nova Inc.", "2023"],
    tagIcons: [bagIcon, userIcon, dateIcon],
  },
  {
    title: [
      "Orion",
      "Background",
      "Objective",
      "Iterative Prototyping",
      "Results ",
      "Conclusion",
    ],
    description: [
      "Orion was founded by a team of tech enthusiasts with a passion for innovation and problem-solving. The founders came from diverse backgrounds in engineering, software development, and business, and they united under the common goal of creating cutting-edge solutions to address modern challenges.",
      "The objective of Orion is to develop and deliver advanced technological solutions that simplify complex processes, enhance efficiency, and improve overall productivity for businesses across various industries. Through a combination of research, development, and collaboration, NovaTech aims to push the boundaries of innovation and set new standards in the tech industry.",
      "Iterative prototyping played a vital role in refining the design based on user testing and feedback. This agile approach allowed for early identification and resolution of any potential issues, ensuring the final design met the highest standards for user experience.",
      "The redesigned platform achieved its goals successfully. User engagement increased by X%, and positive feedback highlighted the improved efficiency in completing transactions. The modern design not only aligned with industry expectations but also positioned them as a secure and user-friendly payments solution.",
      "Throughout the design process, the focus was on creating a brand identity that reflects the company's commitment to innovation, reliability, and forward-thinking. The use of sleek and modern design elements, such as futuristic fonts and dynamic imagery, helps convey the brand's progressive nature. Overall, the design reflects NovaTech's position as a leading provider of cutting-edge solutions."
    ],
    image: ["/assets/orion1.png","/assets/orion2.png","/assets/orion3.png"],
    tag: ["App & Website", "Orion's Belt", "2024"],
    tagIcons: [bagIcon, userIcon, dateIcon],
  },
  {
    title: [
      "ArtFest24",
      "Background",
      "Objective",
      "Iterative Prototyping",
      "Results ",
      "Conclusion",
    ],
    description: [
      "ArtsFest24 was founded by a team of tech enthusiasts with a passion for innovation and problem-solving. The founders came from diverse backgrounds in engineering, software development, and business, and they united under the common goal of creating cutting-edge solutions to address modern challenges.",
      "The objective of Orion is to develop and deliver advanced technological solutions that simplify complex processes, enhance efficiency, and improve overall productivity for businesses across various industries. Through a combination of research, development, and collaboration, NovaTech aims to push the boundaries of innovation and set new standards in the tech industry.",
      "Iterative prototyping played a vital role in refining the design based on user testing and feedback. This agile approach allowed for early identification and resolution of any potential issues, ensuring the final design met the highest standards for user experience.",
      "The redesigned platform achieved its goals successfully. User engagement increased by X%, and positive feedback highlighted the improved efficiency in completing transactions. The modern design not only aligned with industry expectations but also positioned them as a secure and user-friendly payments solution.",
      "Throughout the design process, the focus was on creating a brand identity that reflects the company's commitment to innovation, reliability, and forward-thinking. The use of sleek and modern design elements, such as futuristic fonts and dynamic imagery, helps convey the brand's progressive nature. Overall, the design reflects NovaTech's position as a leading provider of cutting-edge solutions."
    ],
    image: ["/assets/ArtsFest1.png","/assets/ArtsFest2.png","/assets/ArtsFest3.png"],
    tag: ["Branding & Posters", "FestGlobal", "2024"],
    tagIcons: [bagIcon, userIcon, dateIcon],
  },
];
