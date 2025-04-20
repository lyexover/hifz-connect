'use client'
import { useState } from "react"
import styles from "@/app/components/css-modules/read.module.css"
import {  ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import ToTop from "@/app/components/read/toTopButton";

export default function Reader({ surah, firstPage, lastPage }) {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(firstPage)
    const filteredAyahs = surah.ayahs.filter(ayah => ayah.page === currentPage)

    const navigateToSurah = (surahNumber) => {
        router.push(`/read/${surahNumber}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <div className={styles.surahNavigation}>
                    <button 
                        className={styles.surahNavButton}
                        onClick={() => navigateToSurah(surah.number + 1)} 
                        disabled={surah.number >= 114}
                    >
                        <span className={styles.desktopButtonText}>Next Surah</span>
                        <ChevronLeft className={styles.mobileButtonIcon} />
                    </button>
                    <h1 className={styles.surahTitle}>{surah.name}</h1>
                    <button 
                        className={styles.surahNavButton}
                        onClick={() => navigateToSurah(surah.number - 1)} 
                        disabled={surah.number <= 1}
                    >
                        <span className={styles.desktopButtonText}>Previous Surah</span>
                        <ChevronRight className={styles.mobileButtonIcon} />
                    </button>
                </div>
                <h3 className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h3>
            </div>

            <div className={styles.ayahsContainer}>
            {
                filteredAyahs.map((ayah, index) => (
                    <span key={ayah.number} className={styles.ayah}>
                      <span className={styles.ayahText}>
                        {ayah.numberInSurah !== 1 ? ayah.text : ayah.text.slice(38)}
                      </span>
                      <span className={styles.ayahNumber}>{ayah.numberInSurah}</span>
                      {' '}
                    </span>
                ))
            }
            </div>

            <div className={styles.navigation}>
                <span className={styles.pageNumber}>Page {currentPage}</span>
                <div className={styles.pageButtons}>

                <button 
                        className={styles.navButton}
                        onClick={() => setCurrentPage(currentPage + 1)} 
                        disabled={currentPage >= lastPage}
                    >
                        Next Page
                    </button>
                    <button 
                        className={styles.navButton}
                        onClick={() => setCurrentPage(currentPage - 1)} 
                        disabled={currentPage <= firstPage}
                    >
                        Previous Page
                    </button>
                    
                </div>
            </div>

            <ToTop/>
        </div>
    )
}