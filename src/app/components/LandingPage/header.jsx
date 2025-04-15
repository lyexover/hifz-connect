'use client'

import Image from "next/image"
import styles from '../css-modules/home.module.css'
import Link from "next/link"
import { useState } from "react"
import { ScanFace, UserPlus } from "lucide-react";

export default function Header(){

const [opened, setOpened] = useState(false)


const toggleMenu = () => {
    setOpened(!opened);
  };

    return (
        <div className={styles.header}>
            <div className={styles.logo_container}>
               <Image  className={styles.logo} src={'/logo.png'} width={320} height={140} alt="logo" /> 
               <div className={styles.hamburger} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
            </div>
            </div>

            <div className={`${styles.nav_container} ${opened ? styles.opened : ''}`}>
                <ul className={styles.nav}>
                    <li><a className={styles.link} href="#features">Features</a></li>
                    <li><a className={styles.link} href="#about">About us</a></li>
                    <Link className={styles.link} href={''}>Read Quran</Link>
                </ul>
            </div>

            <div className={styles.auth_buttons}>
                  <a className={styles.login_button} href="#auth">  <ScanFace size={19} /> Log-in</a>
                  <a className={styles.signup_button} href="#auth"> <UserPlus size={18} /> Sign-up</a>
            </div>

            
        </div>
    )
}

