import React from "react";

function Posting() {
    return(
        <div>
                <section className="posting_div">
                    <div class="my-5 py-5">
                <div class="row d-flex justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class=" postcontainer card text-dark">
                    <div class="card-body p-3">
                        <h4 class="mb-0">회원님의 작성 게시글</h4>
                        <p class="fw-light mb-0">총 10 posts</p>
                    </div> 
                    <div class="comments">
                        
                        <div>
                            <hr></hr>
                            <h6  className="posting_about">도로교통 안전운전</h6>
                            <div className="d-flex align-items-center mb-3">
                                <p className="posting-date">
                                    2023 / 08 / 18 
                                    
                                    <span class="status badge bg-primary">해결 완료</span>
                                    
                                </p>
                             
                            </div>
                            <h5 className="posting-content">
                                 운전면허증을 재발급하려고 하는데, 그 기준이 어떠한가요?
                            </h5>
                            <p className="posting-react">
                                댓글 7개 | 좋아요 29개
                            </p>
                        </div>
                        <div>
                            <hr></hr>
                            <h6  className="posting_about">교통카드 안내</h6>
                            <div className="d-flex align-items-center mb-3">
                                <p className="posting-date">
                                    2023 / 07 / 29 
                                    
                                    <span class="status badge bg-primary">해결 완료</span>
                                    
                                </p>
                             
                            </div>
                            <h5 className="posting-content">
                            편의점에서 교통카드를 구입하는 것과 
                            <br></br>은행에서의 발급은 무슨 차이가 있나요?
                            </h5>
                            <p className="posting-react">
                                댓글 7개 | 좋아요 29개
                            </p>
                        </div>

                        <div>
                            <hr></hr>
                            <h6  className="posting_about">국민 취업제도</h6>
                            <div className="d-flex align-items-center mb-3">
                                <p className="posting-date">
                                    2023 / 07 / 08
                                    
                                    <span class="status badge bg-primary">해결 완료</span>
                                    
                                </p>
                             
                            </div>
                            <h5 className="posting-content">
                                 취준생이 아닌, 대학교 3학년도 취업제도 시스템을 사용가능한가요?
                            </h5>
                            <p className="posting-react">
                                댓글 24개 | 좋아요 39개
                            </p>
                        </div>
                        <div>
                            <hr></hr>
                            <h6>🔻  게시글 더보기</h6>
                        </div>
                    </div> 


                        

                        
                </div>
                </div>
                        
                   
            </div>
            
            </div>
            </section>
        </div>
    );
}

export default Posting;