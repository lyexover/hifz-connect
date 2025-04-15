'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import styles from "@/app/components/css-modules/navbar.module.css"
import { CircleUserRound, House, BookMarked, BookOpen, Menu, LogOut } from "lucide-react"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false) //mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <Image src="/logo.png" alt="Logo" width={180} height={80} priority />    
                </div>

                <div className={styles.links}>
                    <Link href=''><House size={20} /> Home</Link>
                    <Link href=''><CircleUserRound size={20} /> My Profile</Link>
                    <Link href=''><BookMarked size={20} /> Memorize</Link>
                    <Link href=''><BookOpen size={20} /> Read Quran</Link>
                </div>

                <div className={styles.logoutBtn}>
                    <button ><LogOut size={20}/> Logout</button>
                </div>

                <div className={styles.mobileLayout}>
                    <div className={styles.mobileIcons}>
                        <Link href=''><CircleUserRound size={25} /> Profile</Link>
                        <button onClick={toggleMenu}><Menu size={30} /></button>
                    </div>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <Link href=''><House size={20} /> Home</Link>
                <Link href=''><BookMarked size={20} /> Memorize</Link>
                <Link href=''><BookOpen size={20} /> Read Quran</Link>
                <Link href=''><LogOut size={20} /> Logout</Link>
            </div>
        </>
    )
}