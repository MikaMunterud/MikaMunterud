import { useEffect } from "react";
import Aos from "aos";

export default function ProgressBar({ value, heading }) {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <div>
      <h3 data-aos="fade-up" data-aos-duration="1000">
        {heading}
      </h3>
      <progress
        data-aos="fade-up"
        data-aos-duration="1000"
        className="progressBar"
        value={value}
        max="100"
      ></progress>
    </div>
  );
}
