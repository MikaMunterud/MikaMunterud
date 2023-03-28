import { GiGraduateCap } from "react-icons/gi";
import ResumeHeading from "./ResumeHeading";
import School from "./School";
import "aos/dist/aos.css";

export default function Education({ t }) {
  return (
    <section className="resumeSection">
      <ResumeHeading icon={<GiGraduateCap />} title={t("education")} />

      <div className="resumeSection_details">
        <School
          school={t("education_school1")}
          startDate={"2022-08-24"}
          endDate={t("now")}
          degree={t("education_degree1")}
          finishedCourses={[
            t("finished_1"),
            t("finished_2"),
            t("finished_3"),
            t("finished_4"),
            t("finished_5"),
            t("course_1"),
          ]}
          finishedHeading={t("finished")}
          comingCourses={[
            t("course_2"),
            t("course_3"),
            t("course_4"),
            t("course_5"),
            t("course_6"),
            t("course_7"),
          ]}
          comingHeading={t("course")}
        />

        <School
          school={t("education_school2")}
          startDate={"2022-03-14"}
          endDate={"2022-05-20"}
          degree={t("education_degree2")}
        />

        <School
          school={t("education_school3")}
          startDate={"2020-08-31"}
          endDate={"2021-10-30"}
          degree={t("education_degree3")}
          finishedCourses={[
            t("education_school3_course1"),
            t("education_school3_course2"),
            t("education_school3_course3"),
            t("education_school3_course4"),
            t("education_school3_course5"),
            t("education_school3_course6"),
          ]}
          finishedHeading={t("finished")}
        />

        <School
          school={t("education_school4")}
          startDate={"2015-08-31"}
          endDate={"2018-06-01"}
          degree={t("education_degree4")}
          finishedHeading={t("education_details")}
          detailsText1={t("education_details_text1")}
          detailsText2={t("education_details_text2")}
        />
      </div>
    </section>
  );
}
