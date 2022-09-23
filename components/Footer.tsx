import style from '../styles/Footer.module.css'
import {
    FaInstagram,
    FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
    const handleEmailMe = () => {
        window.open("mailto:jchoi775@gmail.com");
    };
    return (
        <div className={style.container}>
            <div className={style.footerSection}>
                JIN<span>CHOI</span>
            </div>

            <div className={style.footerSection}><p>Copyright © 2021 Jin Choi All rights reserved.</p></div>

            <div className={style.footerSection}>

                <div className={style.footerIcons}>

                    <div><a href="https://www.instagram.com/djinn415/"
                        target="_blank"
                        aria-label="Instagram" ><FaInstagram /></a></div>
                    <div onClick={handleEmailMe}><a><FaRegEnvelope /></a></div>


                </div>

            </div>
        </div>
    )
}
export default Footer;