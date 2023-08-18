import React from 'react';
import './pluspage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import BackButton from '../missonpage/BackButton';
class Pluspage extends React.Component {
  componentDidMount(){
  $('#action_menu_btn').on("click",function(){
    $('.action_menu').toggle();
  });
  }
 
  render() {
   
    return (
     
        <div className="maincontainer">
         
         
          <div>
            <div class="row justify-content-center h-100">
              <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
                <div class="card-header">
                </div>
                <div class="card-body contacts_body">
                  <ul class="contacts">
                  <li class="active">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png" 
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>도로교통센터 상담사</span>
                        <p>전문가 | 채팅 가능</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png" 
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>면허 3번 따본 사람</span>
                        <p>일반 | 7분 전 온라인</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png"
                        alt = ""
                         class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>도로교통 민원실</span>
                        <p>전문가 | 채팅 가능</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png"
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>멋사운전면허학원 원장</span>
                        <p>일반 | 30분 전 온라인 </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png"
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>운전고수</span>
                        <p>일반 | 55분 전 온라인</p>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
                <div class="card-footer"></div>
              </div></div>
              <div class="col-md-8 col-xl-6 chat">
                <div class="card">
                  <div class="card-header msg_head">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png"
                        alt = ""
                        class="rounded-circle user_img" />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>도로교통센터 상담사 </span>
                        <p>20 메시지</p>
                      </div>
                      <div class="video_cam">
                        <span><i class="fas fa-video"></i></span>
                        <span><i class="fas fa-phone"></i></span>
                      </div>
                    </div>
                    <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                    <div class="action_menu">
                      <ul>
                        <li><i class="fas fa-user-circle"></i> 프로필 보기</li>
                        <li><i class="fas fa-users"></i> 즐겨찾기 추가</li>
                        <li><i class="fas fa-plus"></i> 그룹 추가</li>
                        <li><i class="fas fa-ban"></i> 차단</li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body msg_card_body">
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        안녕하세요. 도움이 필요합니다.
                        <span class="msg_time_send">8:55 AM, 오늘</span>
                      </div>
                      <div class="img_cont_msg">
                    <img src="https://img.lovepik.com/free-png/20210918/lovepik-granny-png-image_400257904_wh1200.png"
                        alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png" 
                        alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                      <div class="msg_cotainer">
                        네 연락해줘서 감사합니다. 어떤 걸 도와드릴까요?
                        <span class="msg_time">9:00 AM, 오늘</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        첫 운전 면허 시험을 신청하려는데, 기능시험을 접수하면 될까요?
                        <span class="msg_time_send">9:05 AM, 오늘</span>
                      </div>
                      <div class="img_cont_msg">
                    <img src="https://img.lovepik.com/free-png/20210918/lovepik-granny-png-image_400257904_wh1200.png" 
                    alt = ""
                    class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png" 
                        alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                      <div class="msg_cotainer">
                        우선 교통안전학과 시험에 통과해야 합니다. 학과시험 접수 안내를 도와드릴까요?
                        <span class="msg_time">9:07 AM, 오늘</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mb-4">
                      <div class="msg_cotainer_send">
                        해결했습니다. 감사합니다.
                        <span class="msg_time_send">9:10 AM, 오늘</span>
                      </div>
                      <div class="img_cont_msg">
                  <img src="https://img.lovepik.com/free-png/20210918/lovepik-granny-png-image_400257904_wh1200.png" 
                  alt = ""
                  class="rounded-circle user_img_msg" />
                      </div>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                      <div class="img_cont_msg">
                        <img src="https://cdn-icons-png.flaticon.com/512/4736/4736827.png" alt = ""
                        class="rounded-circle user_img_msg" />
                      </div>
                      <div class="msg_cotainer">
                        좋은 하루 되세요.
                        <span class="msg_time">9:12 AM, 오늘</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="input-group">
                      <div class="input-group-append">
                        <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                      </div>
                      <textarea name="" class="form-control type_msg" placeholder="메시지를 입력하세요."></textarea>
                      <div class="input-group-append">
                        <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BackButton/>
        </div>
     
      
)
};
}
export default Pluspage;