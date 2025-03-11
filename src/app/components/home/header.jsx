import Image from "next/image"
import styles from '../css-modules/home.module.css'
import Link from "next/link"

export default function Header(){
    return (
        <div className={styles.header}>
            <div>
               <Image className={styles.logo} src={'/logo.png'} width={320} height={140} alt="logo"/> 
            </div>

            <div>
                <ul className={styles.nav}>
                    <li><a className={styles.link} href="#features">Features</a></li>
                    <li><a className={styles.link} href="#about">About us</a></li>
                    <Link className={styles.link} href={''}>Read Quran</Link>
                </ul>
            </div>

            <div className={styles.auth_buttons}>
                  <a className={styles.login_button} href="#auth">Log-in</a>
                  <a className={styles.signup_button} href="#auth">Sign-up</a>
            </div>
        </div>
    )
}