import React from "react";
import Testimonial from "./Testimonial";
import Info from "./Info";

const About = () => {
  return (
    <div>
      <Info
        secondaryTitle=""
        mainTitle=""
        title="About."
        subTitle="I’m a designer from Ireland 🇮🇪 with a passion for pixels."
        description="When I'm not designing, I'm out exploring nature, hiking, scuba diving, and surfing. Whether trekking through forests, diving into the depths of the ocean, or riding waves, I find joy and inspiration in outdoor adventures."
        subDescription=""
      />

      <Testimonial />
    </div>
  );
};

export default About;
