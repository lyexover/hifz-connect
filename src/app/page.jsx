
import Intro from "./components/LandingPage/intro";
import Features from "./components/LandingPage/Features";
import Header from "./components/LandingPage/header";
import Auth from "./components/LandingPage/Auth";
import AboutUs from "./components/LandingPage/AboutUs";
import Footer from "./components/LandingPage/Footer";
import styles from './components/css-modules/home.module.css'

export default function LandingPage() {
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
