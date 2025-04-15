import NavBar from "@/app/components/home/NavBar"
import styles from "@/app/components/css-modules/navbar.module.css"

export default function HomeLayout({ children }) {
    return (
        <div className={styles.homeContainer}> 
            <NavBar />
            <main className={styles.content}>
                {children}
            </main>
        </div>
    )
}