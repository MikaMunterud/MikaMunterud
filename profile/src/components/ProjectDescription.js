import { FiExternalLink } from "react-icons/fi";
import { ImGithub } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import IconLink from "./IconLink";

export default function ProjectDescription({
  heading,
  description,
  linkWebb,
  linkGit,
  linkYouTube,
  webbLang,
  linkTextWebb,
  linkTextGit,
  linkTextYouTube,
}) {
  return (
    <div className="projectDescription">
      <h2>
        {heading} <span className="webpageLanguage">{webbLang}</span>{" "}
      </h2>
      <p>{description}</p>
      <div className="projectLinks">
        <IconLink
          icon={<FiExternalLink />}
          link={linkWebb}
          linkText={linkTextWebb}
          className={"website"}
        />
        {linkGit && (
          <IconLink
            icon={<ImGithub />}
            link={linkGit}
            linkText={linkTextGit}
            className={"gitHub"}
          />
        )}

        {linkYouTube && (
          <IconLink
            icon={<TfiYoutube />}
            link={linkYouTube}
            linkText={linkTextYouTube}
            className={"youTube"}
          />
        )}
      </div>
    </div>
  );
}
