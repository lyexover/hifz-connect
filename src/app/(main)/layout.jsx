import NavBar from "@/app/components/home/NavBar"
import styles from "@/app/components/css-modules/navbar.module.css"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ['latin'] })

export default function HomeLayout({ children }) {
    return (
        <div className={`${styles.homeContainer} ${inter.className}`}> 
            <NavBar />
            <main className={styles.content}>
                {children}
            </main>
        </div>
    )
}