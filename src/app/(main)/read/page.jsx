// app/page.jsx
import { sourates } from "@/app/lib/sourates";
import SearchForm from "@/app/components/read/Search";
import styles from '@/app/components/css-modules/read.module.css';
import Link from "next/link";
import ToTop from "@/app/components/read/toTopButton";


export default async function Page({searchParams}) {
    const { name } = await searchParams;

    const filteredSourates = sourates.filter(sourate => {
        if(name) {
            return sourate.arabe.toLowerCase().includes(name.toLowerCase()) || 
                   sourate.translitteration.toLowerCase().includes(name.toLowerCase());
        }
        else {
            return true;
        }
    });

    return (
        <div>

            <SearchForm initialSearchValue={name} />
           
            <div className={styles.listContainer}>
                {filteredSourates.map((sourate) => (
                    <Link href={`/read/${sourate.numero}`} key={sourate.numero} className={styles.sourateItem}>
                        <div className={styles.sourateNumber}>
                            <span>{sourate.numero}</span>
                        </div>
                        <div className={styles.sourateContent}>
                            <div className={styles.sourateInfo}>
                                <h3 className={styles.sourateTitle}>{sourate.translitteration}</h3>
                                <p className={styles.sourateSubtitle}>
                                    {/* Vous pouvez ajouter une traduction ou description ici si disponible */}
                                    {sourate.traduction || `The ${sourate.translitteration}`}
                                </p>
                            </div>
                            <div>
                                <p className={styles.sourateArabe}>{sourate.arabe}</p>
                                <p className={styles.sourateVersets}>{sourate.versets} Ayahs</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


            <ToTop/>
        </div>
    );
}