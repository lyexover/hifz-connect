'use client'
import { useState } from "react"
import Link from "next/link"
import styles from "@/app/components/css-modules/profile.module.css";


export default function ProfileNav(){

const [chosenTab, setChosenTab] = useState("details")


    return (

        <div className={styles.nav}>
            <button className={chosenTab === 'details' ? styles.active : ''} onClick={() =>setChosenTab('details')} ><Link href={''}>Details</Link></button>
            <button className={chosenTab === 'settings' ? styles.active : ''} onClick={() =>setChosenTab('settings')} ><Link href={''}>Settings</Link></button>
            <button className={chosenTab === 'account' ? styles.active : ''} onClick={() =>setChosenTab('account')} ><Link href={''}>Account</Link></button>
            
        </div>
        
    )
}