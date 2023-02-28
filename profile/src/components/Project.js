import { useEffect } from "react";
import Aos from "aos";
import ProjectDescription from "./ProjectDescription";

export default function Project({
  heading,
  linkWebb,
  linkGit,
  imgLink,
  imgAlt,
  description,
  webbLang,
  linkYouTube,
  linkTextWebb,
  linkTextGit,
  linkTextYouTube,
}) {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="1200"
      className="project"
    >
      <a
        href={linkWebb}
        target="_blank"
        rel="noreferrer"
        aria-label={linkTextWebb}
      >
        <img src={imgLink} alt={imgAlt}></img>
      </a>
      <ProjectDescription
        heading={heading}
        description={description}
        linkWebb={linkWebb}
        linkGit={linkGit}
        webbLang={webbLang}
        linkYouTube={linkYouTube}
        linkTextWebb={linkTextWebb}
        linkTextGit={linkTextGit}
        linkTextYouTube={linkTextYouTube}
      />
    </div>
  );
}
