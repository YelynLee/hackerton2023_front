import React from 'react';
import './MissonPage.css';

import BackButton from './BackButton';
import Participants from './Participants';
import MissionStatus from './MissionStatus';
import MissionCard from './MissionCard';

function MissionPage() {

  const missions = [
    { date: '유효기한 | 무기한', name: '학과시험 등록 인증', status: 'success' },
    { date: '유효기한 | 무기한', name: '필기시험 80점이상 인증', status: 'failure' },
    { date: '유효기한 | 2023-12-31', name: '모바일 운전면허증 발급 인증', status: 'failure' },
    { date: '유효기한 | 2023-12-31', name: '교통안전교육 이수 인증', status: 'success' }
  ];
  return (
    <div className="mission-page">

      <BackButton />
      <MissionStatus />
      <Participants name="안전운전 통합민원 미션"/>
      <div className="mission-cards">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            date={mission.date}
            name={mission.name}
            status={mission.status}
          />
        ))}
      </div>
    </div>
  );
}

export default MissionPage;
