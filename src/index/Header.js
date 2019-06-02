import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        const div_bot_top = document.querySelector('.div_bot_top');
        const main_section_slideTOP = div_bot_top.getBoundingClientRect().top;
        if (main_section_slideTOP === 0) {
            document.querySelector('.main_header').classList.remove('fix_menu_header');
        } else {
            document.querySelector('.main_header').classList.add('fix_menu_header');
        }
    }
    render() {
        return (
            <div>
                <header className="main_header fix_menu_header" id="main_header">
                    <span className="bulet_menu">
                        <i className="fa fa-bars"></i>
                    </span>
                    <div className="menu_re">
                        <div className="box_logo"></div>
                        <div className="box_menu"></div>
                    </div>
                    <div className="ovelay_menu"></div>
                    <div className="main_logo">
                        <Link to={'/'} className="show_logo" ><img src={process.env.PUBLIC_URL + '/img/logo_wecoach.png'} alt="We Coach" /></Link>
                        <Link to={'/'} className="hide_logo" ><img src={process.env.PUBLIC_URL + '/img/logo_wecoach_g.png'} alt="We Coach" /></Link>
                    </div>
                    <div className="main_menu">
                        <ul>
                            <li>
                                <Link to={'/register'}>코치로 등록하기</Link>
                            </li>
                            <li>
                                <Link to={'/admin'}>시설 및 장소 찾기</Link>
                            </li>
                            <li>
                                <Link to={'/'}>회원가입</Link>
                            </li>
                            <li>
                                <Link to={'/'}>로그인</Link>
                            </li>

                        </ul>
                    </div>
                </header>{/* main_header */}
            </div>
        );
    }
}

export default Header;