'use client';
import { getPostsBySearch } from '../services/getPostsBySearch';
import { Post } from '../services/types';
import s from './style.module.css'
import { useState } from "react";

type Props = {
  onSearch: (value: Post[]) => void
  onLoading: (value: boolean) => void
}

export function SearchPosts({ onSearch, onLoading }: Props) {
  const [search, setSearch] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLoading(true);
    const data = await getPostsBySearch(search);
    onSearch(data);
    onLoading(false);
  }

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className={s.link} type="submit">Search</button>
    </form>
  )
}