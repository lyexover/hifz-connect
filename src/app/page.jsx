import Image from "next/image";
import Intro from "./components/home/intro";
import Features from "./components/home/Features";
import Header from "./components/home/header";
import Auth from "./components/home/Auth";
import AboutUs from "./components/home/AboutUs";
import Footer from "./components/home/Footer";
import styles from './components/css-modules/home.module.css'

export default function Home() {
   return (
      <div className={styles.home_container}>
        <Header/>
        <Intro/>
        <Features/>
        <Auth/>
        <AboutUs/>
        <Footer/>
      </div>
   )
}
