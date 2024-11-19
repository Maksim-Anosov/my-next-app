'use client';
import s from './style.module.css'

import { useState } from "react";

export function SearchPosts() {
  const [search, setSearch] = useState('');
  return (
    <form className={s.search}>
      <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}