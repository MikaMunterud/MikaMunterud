import Aos from "aos";
import { useEffect } from "react";

export default function ResumeHeading({ icon, title }) {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <h1
      data-aos="fade-right"
      data-aos-duration="800"
      className="resumeSection_heading"
    >
      {icon}
      {title}
    </h1>
  );
}
