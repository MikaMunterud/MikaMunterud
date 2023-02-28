import { useEffect } from "react";
import Aos from "aos";

export default function SkillList({ array, heading }) {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <div className="resumeSection_skills_skill">
      <h2 data-aos="fade-up" data-aos-duration="1000">
        {heading}
      </h2>
      {array.map(function (skill, index) {
        return (
          <h3 data-aos="fade-up" data-aos-duration="1000" key={index}>
            {skill}
          </h3>
        );
      })}
    </div>
  );
}
