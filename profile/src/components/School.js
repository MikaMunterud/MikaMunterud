import { useEffect } from "react";
import { BsDot } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import Aos from "aos";

export default function School({
  school,
  startDate,
  endDate,
  degree,
  finishedCourses,
  finishedHeading,
  comingCourses,
  comingHeading,
  detailsText1,
  detailsText2,
}) {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <div className="resumeSection_details_school">
      <h2 data-aos="fade-up" data-aos-duration="1000">
        {school}
        <span className="date">
          <BsDot />
          {startDate} – {endDate}
        </span>
      </h2>
      <p data-aos="fade-up" data-aos-duration="1000" className="school">
        <em>{degree}</em>
      </p>

      {finishedHeading && (
        <div data-aos="fade-up" data-aos-duration="1000" className="courses">
          <div className="courses_col">
            <details
              data-aos="fade-up"
              data-aos-duration="1200"
              className="schoolCourses"
            >
              <summary className="heading course">
                {finishedHeading}
                <HiOutlinePaperAirplane className="paperPlane" />
              </summary>
              {detailsText1 && <p className="detailsText">{detailsText1}</p>}
              {detailsText2 && <p className="detailsText">{detailsText2}</p>}
              <ul>
                {finishedCourses &&
                  finishedCourses.map(function (course, index) {
                    return (
                      <li
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        key={index}
                      >
                        {course}
                      </li>
                    );
                  })}
              </ul>
            </details>
          </div>
          {comingHeading && (
            <div className="courses_col">
              <details
                data-aos="fade-up"
                data-aos-duration="1200"
                className="schoolCourses"
              >
                <summary className="heading course">
                  {comingHeading}
                  <HiOutlinePaperAirplane className="paperPlane" />
                </summary>
                <ul>
                  {comingCourses &&
                    comingCourses.map(function (course, index) {
                      return (
                        <li
                          data-aos="fade-up"
                          data-aos-duration="1200"
                          key={index}
                        >
                          {course}
                        </li>
                      );
                    })}
                </ul>
              </details>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
