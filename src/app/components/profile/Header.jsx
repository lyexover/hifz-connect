import Image from "next/image";
import styles from "@/app/components/css-modules/profile.module.css";

export default function ProfileHeader() {
  return (
    <div className={styles.profileHeader}>
      <div className={styles.couvertureContainer}>
        <Image
          className={styles.couvertureImage}
          src="/couverture2.jpg"
          alt="Couverture"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={styles.profileContent}>
        <div className={styles.pdpContainer}>
          <span className={styles.initials}>IL</span>
        </div>

        <div className={styles.userInfo}>
          <h2 className={styles.nameContainer}>
            <span className={styles.name}>Indel Lyes</span>
            <span className={styles.username}>@indelyes</span>
          </h2>
          
          <p className={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc aliquet nunc, eget.
          </p>
        </div>
      </div>
    </div>
  );
}