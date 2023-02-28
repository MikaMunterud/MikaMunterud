import { useEffect } from "react";
import Aos from "aos";

export default function Attributes({ attributes }) {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <div className="aboutInfo_attributes">
      {attributes.map(function (attribute, index) {
        return (
          <span
            className="attribute"
            data-aos="fade-up"
            data-aos-duration="1400"
            key={index}
          >
            {attribute}
          </span>
        );
      })}
    </div>
  );
}
