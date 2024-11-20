'use client';
import { useShallow } from 'zustand/shallow';
import { useStore } from '../store/store';
import s from './style.module.css'
import { useState } from "react";

export function SearchPosts() {
  const [search, setSearch] = useState('');
  const getPostsBySearch = useStore(useShallow((state) => state.getPostsBySearch));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getPostsBySearch(search);
  }

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className={s.link} type="submit">Search</button>
    </form>
  )
}