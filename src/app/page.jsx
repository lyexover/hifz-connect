import Image from "next/image";
import Intro from "./components/home/intro";
import Features from "./components/home/Features";
import Header from "./components/home/header";
import styles from './components/css-modules/home.module.css'

export default function Home() {
   return (
      <div className={styles.home_container}>
        <Header/>
        <Intro/>
        <Features/>
      </div>
   )
}
