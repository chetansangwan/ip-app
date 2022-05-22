import Image from "next/image"
import Logo from "../public/assets/logo.svg"
import styles from '../styles/Header.module.css'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Image src={Logo} width={125} height={125} placeholder="blur" blurDataURL={Logo} />
                <button className={styles.button}>IP address</button>
            </nav>
        </header>
    )
}

export default Navbar