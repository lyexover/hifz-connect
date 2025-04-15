'use client'

import styles from '../css-modules/home.module.css'
import { useEffect, useRef, useState } from "react";

export default function Features() {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) { observer.observe(ref.current) }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [])

    const list = [
        {
            title: '📖 Personalized Memorization Plan',
            description: 'Set your own pace with a structured schedule and track your progress effortlessly'
        },
        {
            title: '📝 Interactive Revision & Quizzes',
            description: 'Reinforce your memorization with AI-powered quizzes and smart revision techniques'
        },
        {
            title: '🎙️ Audio Recitation & Tajweed Guidance',
            description: 'Improve your pronunciation with high-quality recitations and expert tajweed tips'
        },
        {
            title: '🏆 Badges & Streaks for Motivation',
            description: 'Stay consistent with daily streaks and unlock achievement badges as you progress'
        }
    ]

    return (
        <section id='features' className={styles.features_container}>

            <h2 className={styles.features_header}>Features</h2>
            <div ref={ref} className={`${styles.features} ${isVisible ? styles.visible : ""}`}>
                {
                    list.map((card) => (
                        <div key={card.title.split(' ')[1]} className={styles.featureCard}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}