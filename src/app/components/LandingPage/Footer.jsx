import Link from "next/link";
import styles from "../css-modules/home.module.css"; // Assuming you'll extract CSS to a module file later

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.footerLogo}>
            <img
              src="/logo.png" // Replace with your logo path
              alt="Quran Memorization Logo"
              className={styles.logoImage}
            />
          </Link>
          <p className={styles.tagline}>
            حفظ القرآن بسهولة ويسر
            <br />
            (Memorize the Quran with Ease)
          </p>
        </div>

        {/* Navigation Links */}
        <div className={styles.linksSection}>
          <h3 className={styles.linksTitle}>روابط مفيدة</h3>
          <ul className={styles.linksList}>
            <li>
              <Link href="/" className={styles.footerLink}>
                الرئيسية (Home)
              </Link>
            </li>
            <li>
              <Link href="/features" className={styles.footerLink}>
                المميزات (Features)
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.footerLink}>
                من نحن (About Us)
              </Link>
            </li>
            <li>
              <Link href="/signup" className={styles.footerLink}>
                التسجيل (Signup)
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Support Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.linksTitle}>تواصلوا معنا</h3>
          <p className={styles.contactText}>
            البريد الإلكتروني: <a href="mailto:support@quranapp.com">support@quranapp.com</a>
          </p>
          <p className={styles.contactText}>
            تابعنا على:
            <a href="https://twitter.com" target="_blank" className={styles.socialLink}> تويتر </a> |
            <a href="https://facebook.com" target="_blank" className={styles.socialLink}> فيسبوك </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} تطبيق حفظ القرآن. جميع الحقوق محفوظة.
        </p>
      </div>

      
    </footer>
  );
};

export default Footer;