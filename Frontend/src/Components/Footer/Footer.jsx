import "./Footer.css"
import LinkedIn_icon from "../../assets/LinkendIn_Icon.png";
import GitHub_icon from "../../assets/Github_Icon.png";
import Whatsapp_icon from "../../assets/Whatsapp-icon.jpeg";

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer-logo">
                <p>NextAstra</p>
            </div>

            <ul className="footer-links">
                <li>Dashboard</li>
                <li>Login</li>
                <li>Register</li>
                
            </ul>

            <div className="Footer-social-icon">
                <img src={LinkedIn_icon} alt="Linkend Icon" />
                <img src={GitHub_icon} alt="Github Icon" />
                <img src={Whatsapp_icon} alt="Whatsapp Icon" />
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Right Reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer;