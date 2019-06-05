import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import { $, jQuery } from 'jquery';
import Slider from "react-slick";

require('./query');
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            att_class_ss1: '',
            att_class_ss2: '',
            att_class_ss3: '',
            att_class_ss4: '',
        }
        // this.handleScroll = this.handleScroll.bind(this); 

    }
    // Handel Sroll
    handleScroll = () => {
        const main_section_slide = document.querySelector('.div_bot_top').clientHeight;
        const main_section_4 = document.querySelector('#main_section_4').clientHeight;
        const main_section_5 = document.querySelector('#main_section_5').clientHeight;

        const main_section_slideTOP = document.querySelector('.div_bot_top').getBoundingClientRect().top;
        const main_section_2TOP = document.querySelector('#main_section_2').getBoundingClientRect().top;
        const main_section_3TOP = document.querySelector('#main_section_3').getBoundingClientRect().top;
        const main_section_4TOP = document.querySelector('#main_section_4').getBoundingClientRect().top;


        if (main_section_slideTOP > -main_section_slide / 2) {
            this.setState({
                att_class_ss1: 'in'
            })
        } else {
            this.setState({
                att_class_ss1: 'out'
            })
        }
        if (main_section_2TOP > 0) {
            this.setState({
                att_class_ss2: 'in'
            })
        } else {
            this.setState({
                att_class_ss2: 'out'
            })
        }
        if (main_section_3TOP > 0) {
            this.setState({
                att_class_ss3: 'in'
            })
        } else {
            this.setState({
                att_class_ss3: 'out'
            })
        }
        if ((main_section_5 + main_section_4) >= main_section_4TOP) {
            this.setState({
                att_class_ss4: 'in'
            })
        } else {
            this.setState({
                att_class_ss4: 'out'
            })
        }
    }
    componentDidMount() {
        const div_bot_top = document.querySelector('.div_bot_top');
        const div_bot_topTOP = div_bot_top.getBoundingClientRect().top;
        if (div_bot_topTOP === 0) {
            this.setState({
                att_class_ss1: 'in'
            })
        } else {
            this.setState({
                att_class_ss1: 'out'
            })
        }
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        var slick = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            className:'slide_items',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Header />
                <section className="main_section_slide div_bot_top" id="main_section_slide" data-fade={this.state.att_class_ss1}>
                    <div className="gb_section action"></div>
                    <div className="container_dis indez_top" >
                        <div className="box_content_slide ">
                            <figure data-an="fade-up">
                                <img className="img_slide action_text" src={process.env.PUBLIC_URL + '/img/sli_WooriCoach.png'} alt="We Coach" />
                            </figure>
                            <h2 className="text_slide_h2 back_text_slide" data-an="fade-up">운동을 할 준비가 되셨나요?</h2>
                            <h1 className="text_slide_h1 back_text_slide" data-an="fade-up" data-an-order="2">여러분을 위한 코치가 여기 있습니다.</h1>
                            <div className="center_" data-an="fade-up" data-an-order="2">
                                <ul className="list_btn_slide ">
                                    <li><a href="#">코치찾기</a></li>
                                    <li><a href="#">코치등록</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>{/* main_section_slide */}
                <section className="main_section_2" id="main_section_2" data-fade={this.state.att_class_ss2}>
                    <div className="gb_section"></div>
                    <div className="container indez_top">
                        <div className="box_text_m2">
                            <h1 className="heading_text w_text_m " data-an="fade-up">시설 및 장소 찾기</h1>
                            <h3 className="bottom_text w_text_m2 " data-an="fade-up" data-an-order="2">운동을 할 수 있는 곳이 어디 있을까?</h3>
                        </div>
                        <div className="box_group_search" data-an="fade-up" data-an-order="3">
                            <div className="box_search">
                                <input type="text" className="input_key" />
                                <span className="label_search"><i className="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className="box_local">
                            <div className="info_local">
                                <div className="heading_local">
                                    <h3>위코치 수영장</h3>
                                </div>
                                <div className="body_local">
                                    <ul>
                                        <li className="local_t">인천광역시 부평구 체육관로 60</li>
                                        <li className="phone_t">037-100-4450</li>
                                    </ul>
                                </div>
                                <div className="readmore_local">
                                    <a href="#">자세히 보기</a>
                                </div>
                            </div>
                            <div className="maps_local">
                                <iframe className="maps_share" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d479.2481136012356!2d108.22407376047376!3d16.066272895667034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1558593018999!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                            </div>
                        </div>
                    </div>
                </section>{/* main_section_2 */}
                <section className="main_section_3" id="main_section_3" data-fade={this.state.att_class_ss3}>
                    <div className="heading_top" data-an="fade-up">
                        <h2>위코치와 함께 운동하신 분들의 이야기!</h2>
                    </div>
                    <div className="gb_section"></div>
                    <div className="container indez_top">
                        <div className="body_slide">
                            <Slider className="slide_items" {...slick}>
                                <div className="item">
                                    <div className="body_item">
                                        <div className="thumb_item_slide">
                                            <img src={process.env.PUBLIC_URL + '/img/slide_news/slide_new_01.jpg'} alt="" />
                                            <div className="overlay_img"></div>
                                            <div className="text_heading"><a href="#">위코치 코치</a></div>
                                        </div>
                                        <div className="body_item_slide">
                                            <div className="text_body">
                                                <p>친절히 잘 가르쳐 주셔서 실력이 업그레이드 됬습니다.</p>
                                            </div>
                                            <ul className="infor_text_slide">
                                                <li className="name_text">홍길동</li>
                                                <li className="show_star start_coach">
                                                    <ul>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star "></li>
                                                        <li className="star"></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>{/* item */}
                                <div className="item">
                                    <div className="body_item">
                                        <div className="thumb_item_slide">
                                            <img src={process.env.PUBLIC_URL + '/img/slide_news/slide_new_02.jpg'} alt="" />
                                            <div className="overlay_img"></div>
                                            <div className="text_heading"><a href="#">위코치 코치</a></div>
                                        </div>
                                        <div className="body_item_slide">
                                            <div className="text_body">
                                                <p>운동하는 것 이외에 일상생활의 식습관같은 사소한 부분까지 챙겨주셔서 정말 제대로 운동하는 …</p>
                                            </div>
                                            <ul className="infor_text_slide">
                                                <li className="name_text">홍길동</li>
                                                <li className="show_star start_coach">
                                                    <ul>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star "></li>
                                                        <li className="star"></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>{/* item */}
                                <div className="item">
                                    <div className="body_item">
                                        <div className="thumb_item_slide">
                                            <img src={process.env.PUBLIC_URL + '/img/slide_news/slide_new_03.jpg'} alt="" />
                                            <div className="overlay_img"></div>
                                            <div className="text_heading"><a href="#">위코치 코치</a></div>
                                        </div>
                                        <div className="body_item_slide">
                                            <div className="text_body">
                                                <p>친절히 잘 가르쳐 주셔서 실력이 업그레이드 됬습니다.</p>
                                            </div>
                                            <ul className="infor_text_slide">
                                                <li className="name_text">홍길동</li>
                                                <li className="show_star start_coach">
                                                    <ul>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star "></li>
                                                        <li className="star"></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>{/* item */}
                                <div className="item">
                                    <div className="body_item">
                                        <div className="thumb_item_slide">
                                            <img src={process.env.PUBLIC_URL + '/img/slide_news/slide_new_01.jpg'} alt="" />
                                            <div className="overlay_img"></div>
                                            <div className="text_heading"><a href="#">위코치 코치</a></div>
                                        </div>
                                        <div className="body_item_slide">
                                            <div className="text_body">
                                                <p>친절히 잘 가르쳐 주셔서 실력이 업그레이드 됬습니다.</p>
                                            </div>
                                            <ul className="infor_text_slide">
                                                <li className="name_text">홍길동</li>
                                                <li className="show_star start_coach">
                                                    <ul>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star "></li>
                                                        <li className="star"></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>{/* item */}
                                <div className="item">
                                    <div className="body_item">
                                        <div className="thumb_item_slide">
                                            <img src={process.env.PUBLIC_URL + '/img/slide_news/slide_new_02.jpg'} alt="" />
                                            <div className="overlay_img"></div>
                                            <div className="text_heading"><a href="#">위코치 코치</a></div>
                                        </div>
                                        <div className="body_item_slide">
                                            <div className="text_body">
                                                <p>운동하는 것 이외에 일상생활의 식습관같은 사소한 부분까지 챙겨주셔서 정말 제대로 운동하는 …</p>
                                            </div>
                                            <ul className="infor_text_slide">
                                                <li className="name_text">홍길동</li>
                                                <li className="show_star start_coach">
                                                    <ul>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star "></li>
                                                        <li className="star"></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>{/* item */}
                                <div className="item">
                                    <div className="body_item">
                                        <div className="thumb_item_slide">
                                            <img src={process.env.PUBLIC_URL + '/img/slide_news/slide_new_03.jpg'} alt="" />
                                            <div className="overlay_img"></div>
                                            <div className="text_heading"><a href="#">위코치 코치</a></div>
                                        </div>
                                        <div className="body_item_slide">
                                            <div className="text_body">
                                                <p>친절히 잘 가르쳐 주셔서 실력이 업그레이드 됬습니다.</p>
                                            </div>
                                            <ul className="infor_text_slide">
                                                <li className="name_text">홍길동</li>
                                                <li className="show_star">
                                                    <ul>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star start_active"></li>
                                                        <li className="star "></li>
                                                        <li className="star"></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>{/* item */}
                            </Slider>
                        </div>
                    </div>
                </section>{/* main_section_3 */}
                <section className="main_section_4" id="main_section_4" data-fade={this.state.att_class_ss4}>
                    <div className="gb_section"></div>
                    <div className="main_ss_4 indez_top">
                        <div className="heading_top" data-an="fade-up">
                            <h2>간단하고 안전하며 보증된 서비스</h2>
                        </div>
                        <div className="box_item_ss4">
                            <div className="item_ss4">
                                <figure className="img_ss4" data-an="fade-up">
                                    <img src={process.env.PUBLIC_URL + '/img/icon/icon_ss4_1.png'} alt="icon 1" />
                                </figure>
                                <h2>믿을 수 있는 코치진</h2>
                            </div>
                            <div className="item_ss4">
                                <figure className="img_ss4" data-an="fade-up">
                                    <img src={process.env.PUBLIC_URL + '/img/icon/icon_ss4_2.png'} alt="icon 1" />
                                </figure>
                                <h2>쉽고 간편한 예약</h2>
                            </div>
                            <div className="item_ss4">
                                <figure className="img_ss4" data-an="fade-up">
                                    <img src={process.env.PUBLIC_URL + '/img/icon/icon_ss4_3.png'} alt="icon 1" />
                                </figure>
                                <h2>안전한 결제 시스템</h2>
                            </div>
                        </div>
                        <div className="read_more_box_ss4">
                            <a href="#">자세히 보기</a>
                        </div>
                    </div>
                </section>{/* main_section_4 */}
                <Footer />

            </div >
        );
    }
}
export default Index;
