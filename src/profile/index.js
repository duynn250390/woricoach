import React, { Component } from 'react';
import Header from '../index/Header';
import Footer from '../index/Footer';
import { Link } from "react-router-dom";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 'tab_1',
            tab2: 'tab_2',
            tab3: 'tab_3',
            active: 'tab_1',
        }
    }
    handleClickMoveTabs = (e, tabs) => {
        e.preventDefault();
        switch (tabs) {
            case (this.state.tab1):
                this.setState({ active: tabs })
                break;
            case (this.state.tab2):
                this.setState({ active: tabs })
                break;
            case (this.state.tab3):
                this.setState({ active: tabs })
                break;
        }
    }
    render() {
        return (
            <div>
                <Header />
                <section className="ss_profile_header div_bot_top">
                    <div className="gb_section"></div>
                </section>
                <section className="content_go_header content">

                    <div className="col_box_sum container_dis">
                        <div className="heading_top_profile">코치 프로필</div>
                        <div className="col_box_child col_box_left">
                            <div className="box_full">
                                <div className="box_infor_coach_top">
                                    <div className="thumb_avatar_coach">
                                        <Link>
                                            <img alt="위코치" src={process.env.PUBLIC_URL + '/img/img_thumb/profile_01.jpg'} />
                                        </Link>
                                    </div>
                                    <div className="information_coach">
                                        <div className="top_title_coach">
                                            <h3>위코치</h3>
                                        </div>
                                        <div className="content_title_coach">
                                            <div className="item">종목 :<span className="bold"> 야구</span></div>
                                            <div className="item">평점 :
                                            <ul className="star_list">
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text_right">신원조회 완료</div>
                                        <div className="footer_info_coach">
                                            <p>코치가 자신의 소개 및 커리큘럼을 소개하는 부분입니다.c</p>
                                        </div>
                                        <div className="box_action right">
                                            <Link className="btn " to="/">소개 더보기</Link>
                                        </div>
                                    </div>
                                </div>{/* box_infor_coach_top */}
                                <div className="list_info_coach">
                                    <div className="heading_tit">
                                        <h2 className="title"> 위코치와 함께 운동하신 분들의 이야기!</h2>
                                    </div>
                                    <div className="box_list">
                                        <ul className="items_list">
                                            <li className="item">
                                                <div className="box_list_item">
                                                    <div className="heading_box">
                                                        <h4>Trial Package</h4>
                                                    </div>
                                                    <div className="body_box">
                                                        <div className="box_row">
                                                            <div className="item_row bold">개인 강습</div>
                                                            <div className="item_row bold">10만원</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row">우리코치 “홍길동＂과의 싱글 패키지</div>
                                                            <div className="item_row bold">1회 수업</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row bold">수업길이 : 60분</div>
                                                        </div>
                                                    </div>
                                                    <div className="footer_box">
                                                        <Link className="btn " to="/">신청하기</Link>
                                                    </div>
                                                </div>
                                            </li>{/* item */}
                                            <li className="item">
                                                <div className="box_list_item">
                                                    <div className="heading_box">
                                                        <h4>Light Package</h4>
                                                    </div>
                                                    <div className="body_box">
                                                        <div className="box_row">
                                                            <div className="item_row bold">개인 강습</div>
                                                            <div className="item_row bold">10만원</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row">우리코치 “홍길동＂과의 싱글 패키지</div>
                                                            <div className="item_row bold">1회 수업</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row bold">수업길이 : 60분</div>
                                                        </div>
                                                    </div>
                                                    <div className="footer_box">
                                                        <Link className="btn " to="/">신청하기</Link>
                                                    </div>
                                                </div>
                                            </li>{/* item */}
                                            <li className="item">
                                                <div className="box_list_item">
                                                    <div className="heading_box">
                                                        <h4>Standard Package</h4>
                                                    </div>
                                                    <div className="body_box">
                                                        <div className="box_row">
                                                            <div className="item_row bold">개인 강습</div>
                                                            <div className="item_row bold">10만원</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row">우리코치 “홍길동＂과의 싱글 패키지</div>
                                                            <div className="item_row bold">1회 수업</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row bold">수업길이 : 60분</div>
                                                        </div>
                                                    </div>
                                                    <div className="footer_box">
                                                        <Link className="btn " to="/">신청하기</Link>
                                                    </div>
                                                </div>
                                            </li>{/* item */}
                                            <li className="item">
                                                <div className="box_list_item">
                                                    <div className="heading_box">
                                                        <h4>Elite Package</h4>
                                                    </div>
                                                    <div className="body_box">
                                                        <div className="box_row">
                                                            <div className="item_row bold">개인 강습</div>
                                                            <div className="item_row bold">10만원</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row">우리코치 “홍길동＂과의 싱글 패키지</div>
                                                            <div className="item_row bold">1회 수업</div>
                                                        </div>
                                                        <div className="box_row">
                                                            <div className="item_row bold">수업길이 : 60분</div>
                                                        </div>
                                                    </div>
                                                    <div className="footer_box">
                                                        <Link className="btn " to="/">신청하기</Link>
                                                    </div>
                                                </div>
                                            </li>{/* item */}
                                        </ul>
                                    </div>
                                    <div className="heading_tit">
                                        <h2 className="title">소개</h2>
                                    </div>
                                    <div className="box_content">
                                        <p>숨고는 저의 개인 정보를 지키면서 선별된 요청자를 소개받을 수 있는 좋은 채널입니다.  작년 12월 말부터 숨고를 시작했는데 지금까지 모집된 총 학생이 60명이 넘어요.</p>
                                        <p>숨고는 저의 개인 정보를 지키면서 선별된 요청자를 소개받을 수 있는 좋은 채널입니다.  작년 12월 말부터 숨고를 시작했는데 지금까지 모집된 총 학생이 60명이 넘어요.</p>
                                        <p>사실 지난 8~9월에는 안 좋은 요청자분들을 몇 만나면서 그만 숨고를 포기할까도 했었는데, 지금은 다시 매우 잘 매칭되어 쓰고 있어요! 특히 견적서를 보낸 후 답장이 없을 시 크레딧을 전액 다 돌려주는 점이 너무 좋은 것 같아요.</p>
                                        <p>예전에는 견적을 읽은 후 답변이 없으면 그게 힘들었는데, 지금은 부담 없이 견적서를 보내고 있어요.</p>
                                    </div>
                                    <div className="heading_tit">
                                        <h2 className="title">코치이력서 엿보기</h2>
                                    </div>
                                    <div className="box_tabs_coach_info">
                                        <div className="box_heading_tabs">
                                            <div className={`item_tabs ${this.state.active === "tab_1" ? 'active' : ''}`}
                                                onClick={(e) => this.handleClickMoveTabs(e, 'tab_1')} >
                                                코치경력
                                                </div>
                                            <div className={`item_tabs ${this.state.active === "tab_2" ? 'active' : ''}`}
                                                onClick={(e) => this.handleClickMoveTabs(e, 'tab_2')} >
                                                선수경력
                                            </div>
                                            <div className={`item_tabs ${this.state.active === "tab_3" ? 'active' : ''}`}
                                                onClick={(e) => this.handleClickMoveTabs(e, 'tab_3')} >
                                                수업계획
                                                </div>
                                        </div>
                                        <div className="box_body_tabs">
                                            <div className={`box_item ${this.state.active === "tab_1" ? 'active' : ''}`}>
                                                <p>- <b>2018</b> 우리고등학교 전국 우승</p>
                                                <p>- <b>2016</b> 우리고등학교 고등학교 코치</p>
                                                <p>- <b>2012</b> 프로구단 입단</p>

                                            </div>
                                            <div className={`box_item  ${this.state.active === "tab_2" ? 'active' : ''}`}>
                                                <p>사실 지난 8~9월에는 안 좋은 요청자분들을 몇 만나면서 그만 숨고를 포기할까도 했었는데, 지금은 다시 매우 잘 매칭되어 쓰고 있어요! 특히 견적서를 보낸 후 답장이 없을 시 크레딧을 전액 다 돌려주는 점이 너무 좋은 것 같아요.</p>
                                            </div>
                                            <div className={`box_item  ${this.state.active === "tab_3" ? 'active' : ''}`}>
                                                <p>숨고는 저의 개인 정보를 지키면서 선별된 요청자를 소개받을 수 있는 좋은 채널입니다.  작년 12월 말부터 숨고를 시작했는데 지금까지 모집된 총 학생이 60명이 넘어요.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heading_tit">
                                        <h2 className="title">포토</h2>
                                    </div>
                                    <div className="portfolio_wrapper gallery">
                                        <div className="element_grid wori">
                                            <div className="static gallery_type  ">
                                                <Link to="/" className="gallery_archi">
                                                    <img className="preview" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2013/06/photo-1438109491414-7198515b166b-705x529.jpg" alt="Adventure Photography" />
                                                </Link>

                                            </div>
                                        </div>
                                        <div className="element_grid wori">
                                            <div className="static gallery_type  ">
                                                <Link to="" className="gallery_archi">
                                                    <img className="preview" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2015/06/one-scene-705x529.jpg" alt="Adventure Photography" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="element_grid wori">
                                            <div className="static gallery_type  ">
                                                <Link to="" className="gallery_archi">
                                                    <img className="preview" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2011/06/pexels-photo-1-705x529.jpeg" alt="Adventure Photography" />
                                                </Link>

                                            </div>
                                        </div>
                                        <div className="element_grid wori">
                                            <div className="static gallery_type  ">
                                                <Link to="" className="gallery_archi">
                                                    <img className="preview" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2011/06/350d4ecf94ade25037dbc082e9fbe0d7-705x529.jpg" alt="Adventure Photography" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="element_grid wori">
                                            <div className="static gallery_type  ">
                                                <Link to="" className="gallery_archi">
                                                    <img className="preview" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2015/06/photo-1418225043143-90858d2301b4-705x529.jpg" alt="Adventure Photography" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="element_grid wori">
                                            <div className="static gallery_type static ">
                                                <Link to="" className="gallery_archi">
                                                    <img className="preview" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2015/06/camera-photography-vintage-photo-705x529.jpg" alt="Adventure Photography" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="read_more">
                                        <Link to="" className="btn">목록</Link>
                                    </div>
                                </div>{/* list_info_coach */}

                            </div>
                        </div>{/* col_box_left */}
                        <div className="col_box_child col_box_right">
                            <div className="box_full">
                                <div className="box_sum_sidebar sidebar_top">
                                    <h2 className="text_top">코치에게 궁금하게 있으신가요?</h2>
                                    <Link to="#" className="btn">코치에게 쪽지보내기</Link>
                                </div>{/* box_sum_sidebar */}
                                <div className="box_sum_sidebar maps">
                                    <div className="heading_box_title">강습장소</div>
                                    <div className="body_box_sider">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4837.270297907536!2d108.22006881542536!3d16.072032243630435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183104bcbfd5%3A0x5ac91edd13470073!2sStudio+Video+T%C3%A2m+Li%C3%AAn!5e1!3m2!1svi!2s!4v1559705546956!5m2!1svi!2s" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                        <p>주소 : 경기도 부천시 </p>
                                    </div>
                                </div>{/* box_sum_sidebar */}
                                <div className="box_sum_sidebar">
                                    <div className="body_box_sider box_color">
                                        원하시는 장소가 따로 있으면 <br />
                                        변경 가능합니다.<br />
                                        이동가능 거리 : 5~10Km
                                    </div>
                                </div>{/* box_sum_sidebar */}
                                <div className="box_sum_sidebar wori_gua">
                                    <div className="heading_box_title">
                                        WooriCoach <br />Guarantee
                                    </div>
                                    <div className="body_box_sider box_list">
                                        <ul>
                                            <li>모든 코치에 대한 성차별 여부 모니터링 및 차단</li>
                                            <li>100% 환불정책</li>
                                            <li>질과 양이 다른 트레이닝</li>
                                            <li>현금이 필요없는 쉬운 결제서비스</li>
                                            <li>에스크로 안심결제 보장</li>
                                            <li>스케쥴 가이드 및 일정 알림 서비스</li>
                                        </ul>
                                        <div className="btn">
                                            <Link to="#" className="btn_act">자세히 보기</Link>
                                        </div>
                                    </div>
                                </div>{/* box_sum_sidebar */}
                                <div className="box_sum_sidebar wori_gua">
                                    <div className="body_box_sider contact_box">
                                        <h2 className="heading">Contact Us</h2>
                                        <ul className="contact_info">
                                            <li><i className="fa fa-phone" aria-hidden="true"></i> 02-222-222-222</li>
                                            <li><i className="fa fa-envelope" aria-hidden="true"></i>psyounic.gmail.com</li>
                                        </ul>
                                    </div>
                                </div>{/* box_sum_sidebar */}
                            </div>
                        </div>{/* col_box_right */}
                    </div>
                </section>
                <section className="module_end_profi">
                    <div className="container_dis">
                        <div className="heading_tit">
                            <h2 className="title no_coach">리뷰</h2>
                        </div>
                        <div className="box_sumprofi">
                            <div className="box_item">
                                <div className="box_comment active">
                                    <div className="content_commet">
                                        친절히 잘 가르쳐 주셔서 실력이 업그레이드 됬습니다.
                                    </div>
                                </div>
                                <div className="box_comment_auth">
                                    <div className="thumb_auth">
                                        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2015/06/photo-1418225043143-90858d2301b4-705x529.jpg" alt="" />
                                    </div>
                                    <div className="info_auth_comment">
                                        <div className="start_coach">
                                            <ul>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star "></li>
                                                <li className="star"></li>
                                            </ul>
                                        </div>
                                        <div className="name_coach">
                                            홍길동
                                        </div>
                                        <div className="data_coach">2019.03.05</div>
                                    </div>
                                </div>
                            </div>{/* box_item */}
                            <div className="box_item">
                                <div className="box_comment ">
                                    <div className="content_commet">
                                        친절히 잘 가르쳐 주셔서 실력이 업그레이드 됬습니다.
                                    </div>
                                </div>
                                <div className="box_comment_auth">
                                    <div className="thumb_auth">
                                        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2015/06/camera-photography-vintage-photo-705x529.jpg" alt="" />
                                    </div>
                                    <div className="info_auth_comment">
                                        <div className="start_coach">
                                            <ul>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star"></li>
                                            </ul>
                                        </div>
                                        <div className="name_coach">
                                            홍길동
                                        </div>
                                        <div className="data_coach">2019.03.05</div>
                                    </div>
                                </div>
                            </div>{/* box_item */}
                            <div className="box_item">
                                <div className="box_comment ">
                                    <div className="content_commet">
                                        친절히 잘 가르쳐 주셔서 실력이 업그레이드 됬습니다.
                                    </div>
                                </div>
                                <div className="box_comment_auth">
                                    <div className="thumb_auth">
                                        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/photography/demo1/wp-content/uploads/2011/06/pexels-photo-1-705x529.jpeg" alt="" />
                                    </div>
                                    <div className="info_auth_comment">
                                        <div className="start_coach">
                                            <ul>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star start_active"></li>
                                                <li className="star"></li>
                                            </ul>
                                        </div>
                                        <div className="name_coach">
                                            홍길동
                                        </div>
                                        <div className="data_coach">2019.03.05</div>
                                    </div>
                                </div>
                            </div>{/* box_item */}
                        </div>
                        <div className="bnt_coach">
                            <Link to="#" className="btn_bg"> …더보기</Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        );
    }
}

export default index;