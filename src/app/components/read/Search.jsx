
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '@/app/components/css-modules/read.module.css';

export default function SearchForm({ initialSearchValue }) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(initialSearchValue || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (searchValue) {
      params.set('name', searchValue);
    } else {
      params.delete('name');
    }
    
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input 
          type="text" 
          placeholder="Rechercher une sourate" 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Rechercher</button>
      </form>
    </div>
  );
}