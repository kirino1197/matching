import React from "react";

import { footerText } from "@/constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="#">sign up</a>
                        </div>
                        <p className="desc">회원가입</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; Capstone Design 4조<br/>
                    이 사이트는 next.js를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer;