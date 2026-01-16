import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CategoryCard({ title, description, link, icon }) {
  return (
    <Link to={link} className={styles.categoryCard}>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{icon}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.arrow}>→</span>
      </div>
    </Link>
  );
}

export function CategoryGrid({ children }) {
  return <div className={styles.categoryGrid}>{children}</div>;
}
