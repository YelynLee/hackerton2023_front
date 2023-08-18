import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SimplePage.css';

const faqData = [
  {
    question: 'Q1. 만 65세 이상도 교통안전 교육 신청이 가능한가요?',
    answer: 'A. 고령 운전자를 위한 교육을 신청할 수 있어요.',
  },
  {
    question: 'Q2. 운전 시험(기능 / 도로주행) 불합격 시 언제부터 재응시 가능한가요?',
    answer: 'A.불합격일로부터 3일 경과 후 재응시 가능합니다',
  },
  {
    question: 'Q3. 1종과 2종의 큰 차이는 무엇인가요?',
    answer: 'A.1종은 클러치를 사용하고 2종은 오토를 사용한다고 볼 수 있으며 둘의 난이도는 클러치작동능숙에 따라 달라질 수 있습니다.',
  },
];

function SimplePage() {
  // 카테고리 
  const categories = ['초간단질문', '플러스질문', '수행미션'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  // 버튼들 보이게 하려고 
  const isSimpleQuestionCategory = selectedCategory === '초간단질문';
  // 아코디언 
  const [accordion, setActiveAccordion] = useState(-1);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };





  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
    } else {
      setActiveAccordion(index);
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === '플러스질문') {
      navigate('/pluspage'); // 플러스질문 페이지로 이동
    } else if (category === '수행미션') {
      navigate('/missonpage'); // 미션수행 페이지로 이동
    }
  };

  return (
    <div className="simple-page">
      <header className="simplepage-header">
        <img src="https://cdn-icons-png.flaticon.com/512/1005/1005630.png" alt="로고" className="simplelogo" />
        <div className="category-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>
      <main className="content">
        {isSimpleQuestionCategory && (
          <div className="faq-section">
            <h1>안전운전 통합민원</h1>
            <img className="simplepageimg" src='https://blog.kakaocdn.net/dn/1fQQ7/btrVtGM3mVv/NND2A2qPZpuD75hD1bWq4K/img.jpg'/>
            <br></br> <br></br> <br></br>
            <p><h5>운전면허 시험을 접수할 수 있고 신분증을 발급을 제공해주며 <br></br>관련 교통 안전교육을 제공해줍니다.</h5></p>
            <div className='faqbox'>
              <h2>FAQ | 자주 묻는 질문</h2>
              <div className="accordion_faq">
                {faqData.map((faq, index) => (
                  <div key={index} onClick={() => toggleAccordion(index)}>
                    <div className="accordion-header">
                      <h6 className={accordion === index ? 'active' : ''}>{faq.question}</h6>
                    </div>
                    <div className={`accordion-content ${accordion === index ? 'active' : ''}`}>
                      <p><h6>{faq.answer}</h6></p>
                    </div>
                  </div>
                ))}
            </div>

            </div>
            
          </div>
        )}
      </main>
      {isSimpleQuestionCategory && (
        <div className="page-buttons">
          <button className="back-button " onClick={goBack} >뒤로가기</button>
        </div>
      )}
    </div>
  );
}

export default SimplePage;
