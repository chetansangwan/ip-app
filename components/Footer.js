import Image from "next/image"
import Link from "next/link"
import Logo from "../public/assets/logo.svg"
import styles from "../styles/Footer.module.css"
import Contact from "../pages/contact"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerarea}>
                <div className={styles.footerinfo}>
                    <Image src={Logo} width={100} height={90} layout="fixed" />
                    <p>IPcost is a free service that allows you to know your IP address and its location. You will know your IPV4, IPV6 and find other information such as the host name or the port used. Your IP address will be geolocated on the world map with details such as the country, region or city. We are also able to detect if your ip is exposed or if it is protected by a VPN / proxy.</p>
                </div>
                <div>
                    <h4>Information</h4>
                    <ul>
                        <li><Link href={"/"}>Terms and conditions</Link ></li>
                        <li><Link href={"/"}>Privacy policy</Link ></li>
                        <li><Link href={"/contact"}>Contact us</Link ></li>
                    </ul>
                </div>
                <div>
                    <h4>Services</h4>
                    <ul>
                        <li><Link href={"/"}>Hide your ip</Link ></li>
                        <li><Link href={"/"}>IPV4 vs IPV6</Link ></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>IPcost © 2021. All rights reserved.</span>
            </div>

        </footer >
    )
}

export default Footer