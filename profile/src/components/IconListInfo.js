import { useEffect } from "react";
import Aos from "aos";

export default function IconListInfo({ icon, heading, description, link }) {
  useEffect(function () {
    Aos.init();
  }, []);

  if (icon && heading && description && link) {
    <li data-aos="fade-up" data-aos-duration="1400">
      {icon}
      <a href={link}>
        <strong> {heading}: </strong>
        <span>{description}</span>
      </a>
    </li>;
  }

  return (
    <li data-aos="fade-up" data-aos-duration="1400">
      {icon}
      <strong> {heading}: </strong>
      <span>{description}</span>
    </li>
  );
}
