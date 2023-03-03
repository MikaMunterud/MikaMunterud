import Aos from "aos";
import { useEffect } from "react";

export default function IconLink({
  icon,
  link,
  className,
  dataHover,
  linkText,
  description,
}) {
  useEffect(function () {
    Aos.init();
  }, []);
  if (icon && link && className && dataHover) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={linkText}
        className={className}
        data-hover={dataHover}
      >
        {icon}
      </a>
    );
  }

  if (icon && link && className) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={linkText}
        className={className}
      >
        {icon}
      </a>
    );
  }

  if (icon && link && linkText && description) {
    return (
      <a
        href={link}
        target="_blank"
        aria-label={linkText}
        rel="noreferrer"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        {icon} <span>{description}</span>
      </a>
    );
  }

  return (
    <a href={link} target="_blank" aria-label={linkText} rel="noreferrer">
      {icon}
    </a>
  );
}
