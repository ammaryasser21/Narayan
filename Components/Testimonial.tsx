import Image from "next/image";
import React from "react";
import Special from "./Special";
import { useIntersectionObserver } from "./useIntersectionObserver";

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Patrick Wilson's product design skills are nothing short of exceptional. His ability to infuse creativity and innovation into every project is truly commendable. From concept to execution, Patrick consistently demonstrates a keen eye for detail and a unique approach to design that sets his work apart.",
    name: "Orla Fagan",
    position: "Fashion Designer",
    image: "/assets/test-1.png",
  },
  {
    text: "Working with Patrick Wilson on product design projects has been a consistent positive experience. His attention to detail and commitment to delivering high-quality work. One of the standout aspects of Patrick's professionalism is his ability to adhere to deadlines without compromising on quality of the final product.",
    name: "Peter Smith",
    position: "Lead Developer",
    image: "/assets/test-2.png",
  },
  {
    text: "The seamless integration of aesthetics with functionality is a hallmark of Patrick's work. His designs not only look visually appealing but also result in products that are intuitive and user-friendly. Patrick's dedication to creating designs that resonate with the end-users truly sets him apart in the field of design.",
    name: "Niamh Regan",
    position: "Consultant",
    image: "/assets/test-3.avif",
  },
];

const Testimonial: React.FC = () => {
  const testimonialRef = useIntersectionObserver("testimonial");

  const renderTestimonials = () =>
    testimonials.map(({ text, name, position, image }) => (
      <Special key={name} style="w-[100%]" hover="">
        <div className="card flex flex-col gap-8 flex-[1 0 0] flex-shrink-0 flex-grow-1 pt-[29.3px] pl-[24px] pr-[34px] pb-[24px]">
          <span>
            <svg
              width="29"
              height="20"
              viewBox="0 0 29 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3209 19.0719L23.1657 0.304688H28.8984L24.0709 19.0719H15.3209ZM0.898438 19.0719L8.74327 0.304688H14.476L9.64844 19.0719H0.898438Z"
                fill="#3366AC"
              />
            </svg>
          </span>
          <p className="font-jetbrains text-[14px] leading-[24px] pb-[48px]">
            {text}
          </p>
          <div className="person flex align-middle gap-[16px]">
            <div className="avatar">
              <Image
                className="rounded-full"
                src={image}
                alt="icon"
                width={48}
                height={48}
              />
            </div>
            <div className="content">
              <p className="text-[16px] font-jetbrains font-bold">{name}</p>
              <p className="text-[14px] font-jetbrains font-normal text-[#808080]">
                {position}
              </p>
            </div>
          </div>
        </div>
      </Special>
    ));

  return (
    <section ref={testimonialRef} className="testimonial py-[160px] fade-up">
      <h1 className="text-[28px] font-righteous pb-[29px]">Testimonials</h1>
      <div className="cards flex flex-row gap-6 flex-[0 0 auto]">
        {renderTestimonials()}
      </div>
    </section>
  );
};

export default Testimonial;
