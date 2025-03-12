import Image from "next/image"
import styles from '../css-modules/home.module.css'

export default function Intro(){
    return (
        <section className={styles.intro}>

            <div className={styles.intro_text}>
               <h1 className={styles.arabic}>”وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌۭ وَرَحْمَةٌۭ لِّلْمُؤْمِنِينَ“</h1>
               <p><strong>“And We send down of the Qur'an that which is healing and mercy for the believers.”</strong>(Surah Al-Isra 17:82)</p>
               <p>We're here to help you start you Quran Journey !</p>
               <a href="#auth">Get Started !</a>
            </div>

            <div className={styles.img_container}>
                <Image className={styles.intro_image} src={'/intro-image.png'} alt="quran reading" width={3024} height={2135}/>
            </div>
        </section>
    )
}