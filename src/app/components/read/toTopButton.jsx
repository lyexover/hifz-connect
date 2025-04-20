'use client'
import { ArrowUp } from "lucide-react";
import styles from '@/app/components/css-modules/read.module.css';

export default function ToTop(){
    return (
        <div className={styles.toTop} >
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                   <ArrowUp />
                </button>
            </div>
    )
}