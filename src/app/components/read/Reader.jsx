'use client'
import { useState } from "react"

export default function Reader({ surah, firstPage }) {

    const [currentPage, setCurrentPage] = useState(firstPage)
    const filteredAyahs = surah.ayahs.filter(ayah => ayah.page === currentPage)


    return (

        <div>
            {
                filteredAyahs.map((ayah, index) => (
                    <div key={ayah.number} className="ayah">
                        <p>{ayah.text}</p>
                        
                    </div>
                ))
            }
        
        </div>
    
    )
}