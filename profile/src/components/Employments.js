import { MdWork } from 'react-icons/md';
import Work from './Work';
import ResumeHeading from './ResumeHeading';

export default function Employments({ t }) {
  return (
    <section className="resumeSection">
      <ResumeHeading icon={<MdWork />} title={t('job')} />

      <div className="resumeSection_details">
        <Work
          companyName={'Digitalist Open Tech AB'}
          startDate={'2023-10-30'}
          endDate={'2024-04-11'}
          position={t('job_position4')}
          description={t('job_company4')}
        />
        <Work
          companyName={'Team Sportia AB'}
          startDate={'2018-03-31'}
          endDate={'2020-03-31'}
          position={t('job_position1')}
          description={t('job_company1')}
        />
        <Work
          companyName={'Rosa Bussarna'}
          startDate={'2009'}
          endDate={'2022'}
          position={t('job_position2')}
          description={t('job_company2')}
        />
        <Work
          companyName={'Milbert Event AB'}
          startDate={'2014-04-07'}
          endDate={'2015-11-01'}
          position={t('job_position3')}
          description={t('job_company3')}
        />
      </div>
    </section>
  );
}
