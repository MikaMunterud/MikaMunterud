import { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import ResumeHeading from "./ResumeHeading";
import SkillList from "./SkillList";
import { TbTools } from "react-icons/tb";
import Aos from "aos";

export default function Skills({ t }) {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <section className="resumeSection">
      <ResumeHeading icon={<TbTools />} title={t("skill")} />
      <div className="resumeSection_details">
        <div className="resumeSection_skills">
          <div className="resumeSection_skills_skill">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              {t("language")}
            </h2>
            <ProgressBar heading={t("language_1")} value={98} />
            <ProgressBar heading={t("language_2")} value={95} />
            <ProgressBar heading={t("language_3")} value={40} />
          </div>

          <SkillList
            heading={"FrontEnd"}
            array={["JavaScript", "HTML", "CSS", "SCSS", "React"]}
          />
          <SkillList
            heading={"BackEnd"}
            array={["Node.js", "Express", "Java"]}
          />
          <SkillList heading={t("database")} array={["MySQL", "MongoDB"]} />
        </div>
      </div>
    </section>
  );
}
