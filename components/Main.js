import Ip_app from "./Ip_app"
import styles from '../styles/Main.module.css'
import Image from "next/image"
import ilock from "../public/assets/i-lock.svg"
import iinfos from "../public/assets/i-infos.svg"
import iearth from "../public/assets/i-earth.svg"

const Main = () => {
    return (
        <main className={styles.main}>
            <header>
            </header>
            <Ip_app />
            <div className={styles.cards}>
                <div className={styles.card}>
                    <i>
                        <Image src={ilock} />
                    </i>
                    <h3>What is my IP address</h3>
                    <p>IPcost makes it easy to find out your IP V4 and IPv6 address. This information is public and is generally used by internet services to present you with personalized content, such as advertisements. You may need to know whats my ip to resolve a network problem, to enter the whitelist, for problems accessing a website, to find out if my ip address is dynamic, etc.
                    </p>
                </div>
                <div className={styles.card}>
                    <i>
                        <Image src={iinfos} />
                    </i>
                    <h3>How the IP address works</h3>
                    <p>Each device connected to the Internet is assigned an IP address by the IANA, an organization responsible for their assignment. It is with this unique and public address that it is possible to identify your device, to know its host name or to locate it. There are two protocols, IPV4 which is the most common and encoded on 32 bits, then IPV6 encoded on 132 bits and recently arrived following the emergence of connected objects and a lack of available IPV4.
                    </p>
                </div>
                <div className={styles.card}>
                    <i>
                        <Image src={iearth} />
                    </i>
                    <h3>IP lookup on the world map</h3>
                    <p>Geolocation based on IP address is a way to locate a computer or mobile device that is connected to the Internet. You can locate a V4 or V6 IP and know the location of the device within a few kilometers on the world map. Our tool queries public databases to retrieve longitude, latitude and places a pin with a radius within which the desired device is located.</p>
                </div>
            </div>
        </main>
    )
}

export default Main