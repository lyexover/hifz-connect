'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import styles from "@/app/components/css-modules/navbar.module.css"
import { CircleUserRound, House, BookMarked, BookOpen, Menu, LogOut } from "lucide-react"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false) //mobile menu
    const pathname = usePathname()
   
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const isLinkActive = (path) => {
        // Pour les autres pages, vérifier si le pathname commence par le path
        return pathname.startsWith(path)
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <Image src="/logo.png" alt="Logo" width={180} height={80} priority />    
                </div>

                <div className={styles.links}>
                    <Link href="/home" className={isLinkActive('/home') ? styles.active : ''}>
                        <House size={20} /> Home
                    </Link>
                    <Link href="/profile" className={isLinkActive('/profile') ? styles.active : ''}>
                        <CircleUserRound size={20} /> My Profile
                    </Link>
                    <Link href="/memorize" className={isLinkActive('/memorize') ? styles.active : ''}>
                        <BookMarked size={20} /> Memorize
                    </Link>
                    <Link href="/read" className={isLinkActive('/read') ? styles.active : ''}>
                        <BookOpen size={20} /> Read Quran
                    </Link>
                </div>

                <div className={styles.logoutBtn}>
                    <button><LogOut size={20}/> Logout</button>
                </div>

                <div className={styles.mobileLayout}>
                    <div className={styles.mobileIcons}>
                        <Link href='/profile' className={isLinkActive('/profile') ? styles.active : ''}>
                            <CircleUserRound size={30} />
                        </Link>
                        <button onClick={toggleMenu}><Menu size={35} /></button>
                    </div>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <Link href="/" className={isLinkActive('/') ? styles.active : ''}>
                    <House size={20} /> Home
                </Link>
                <Link href="/memorize" className={isLinkActive('/memorize') ? styles.active : ''}>
                    <BookMarked size={20} /> Memorize
                </Link>
                <Link href="/read" className={isLinkActive('/read') ? styles.active : ''}>
                    <BookOpen size={20} /> Read Quran
                </Link>
                <Link href="" className={isLinkActive('/logout') ? styles.active : ''}>
                    <LogOut size={20} /> Logout
                </Link>
            </div>
        </>
    )
}