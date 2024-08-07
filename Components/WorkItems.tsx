import { StaticImageData } from "next/image";
import work1 from "../public/assets/work-1.png";
import work2 from "../public/assets/work-2.png";
import work3 from "../public/assets/work-3.png";
import work4 from "../public/assets/work-4.png";

export interface WorkItem {
  title: string[];
  description: string[];
  image: StaticImageData[];
}

export const workItems: WorkItem[] = [
  { title: ["Zephyr"], description: ["Branding & App"], image: [work1] },
  { title: ["NovaTech"], description: ["Website & App"], image:[ work2] },
  { title: ["Orion"], description: ["App & Website"], image: [work3] },
  { title: ["ArtFest24"], description: ["Branding & Posters"], image: [work4] },
];
