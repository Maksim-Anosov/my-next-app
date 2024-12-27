'use client';
import { useShallow } from 'zustand/shallow';
import { useStore } from '../store/store';
import s from './style.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getPostsBySearch } from '../services/getPostsBySearch';

export function SearchPosts() {
  const [search, setSearch] = useState('');
  const setPosts = useStore(useShallow((state) => state.setPosts));

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSearch = useCallback((search: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      getPostsBySearch(search).then((posts) => {
        if (posts) setPosts(posts);
      });
    }, 500);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debouncedSearch(newSearch);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <form className={s.search}>
      <input
        type='search'
        placeholder='Search...'
        value={search}
        onChange={onChange}
      />
    </form>
  );
}
