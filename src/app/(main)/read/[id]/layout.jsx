import { Noto_Naskh_Arabic, Amiri } from 'next/font/google'

const quranFont = Amiri({
    subsets: ['arabic'],
    weight: ['400', '700'],
    variable: '--font-quran',
})

export default function Layout({ children }) {
  
    return (
        <div className={`${quranFont.className}`}>
            {children}
        </div>
    )

}