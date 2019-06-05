import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <section className="main_section_5" id="main_section_5">
                    <div className="container_dis">
                        <div className="sum_box_ss5">
                            <div className="box_item_ss5">
                                <div className="heading_title">
                                    <h3>서비스</h3>
                                </div>
                                <div className="body_item_ss5 lis_body_item_ss5">
                                    <ul>
                                        <li><Link to="">서비스 소개</Link></li>
                                        <li><Link to="">코치 찾기</Link></li>
                                        <li><Link to="">코치로 등록하기</Link></li>
                                        <li><Link to="">시설 및 장소 찾기</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box_item_ss5">
                                <div className="heading_title">
                                    <h3>마이페이지</h3>
                                </div>
                                <div className="body_item_ss5">
                                    <ul>
                                        <li><Link to="">강습내역</Link></li>
                                        <li><Link to="">쪽지</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box_item_ss5">
                                <div className="heading_title">
                                    <img src={process.env.PUBLIC_URL + '/img/logo_wecoach_footer.png'} alt="logo" />
                                </div>
                                <div className="body_item_ss5">
                                    <ul className="link_n">
                                        <li>사업자등록번호 : <b>120-88-22325 </b></li>
                                        <li>개인정보책임관리자 : <b>박성영</b></li>
                                        <li>서울시 강남구 </li>
                                        <li>고객센터 : 0000-0000</li>
                                    </ul>
                                    <ul className="link_y">
                                        <li>
                                            <Link to="">개인정보 처리방침 </Link>
                                        </li>
                                        <li>
                                            <Link to="">이용약관 </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* main_section_5 */}

                <footer className="main_footer">
                    <div className="container">
                        <ul className="social_box">
                            <li><Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                            <li><Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        </ul>
                    </div>
                </footer>{/* main_footer */}
            </div>
        );
    }
}

export default Footer;