'use client'

import React from 'react';
import Image from 'next/image';
import styles from '../css-modules/home.module.css'

export default function AboutUs() {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Hifz-Connect</h1>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image 
              src="/aboutusImage.jpg" 
              alt="Muslims memorizing Quran" 
              width={500} 
              height={350}
              className={styles.aboutImage}
            />
          </div>
          
          <div className={styles.textContent}>
            <h2 className={styles.subtitle}>Our Mission</h2>
            <p className={styles.paragraph}>
              At Hifz-Connect, we are dedicated to helping Muslims worldwide in their sacred journey of memorizing the Holy Quran. Our app was created by a team of developers who understand the challenges and rewards of Quran memorization.
            </p>
            
            <h2 className={styles.subtitle}>Who We Are</h2>
            <p className={styles.paragraph}>
              We are a group of Muslim developers, educators, and Huffaz (those who have memorized the Quran) who recognized the need for a modern, technology-driven approach to an age-old tradition. Our team combines expertise in Islamic studies with cutting-edge technology to create a tool that respects tradition while embracing innovation.
            </p>
            
            <h2 className={styles.subtitle}>Our Approach</h2>
            <p className={styles.paragraph}>
              Hifz-Connect employs a structured, personalized methodology that adapts to each individual's pace and learning style. We integrate traditional memorization techniques with modern educational practices, enhanced by technology to make your Quran journey more effective and enjoyable.
            </p>
            
            {/* <div className={styles.values}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>🕌</div>
                <h3>Respect for Tradition</h3>
                <p>Following established methods of Quran memorization</p>
              </div>
              
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>🔄</div>
                <h3>Consistency</h3>
                <p>Building strong habits through regular practice</p>
              </div>
              
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>📱</div>
                <h3>Accessibility</h3>
                <p>Making Quran memorization available to everyone</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}