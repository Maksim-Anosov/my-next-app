'use client';
import { useEffect } from "react";
import { useStore } from "../store/store";
import s from './style.module.css'
import Link from "next/link";
import Loading from "../blog/loading";
import { useShallow } from "zustand/shallow";

export function PostsList() {
  const [posts, loading, getPosts] = useStore(useShallow((state) => [
    state.posts,
    state.loading,
    state.getPosts
  ]));

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    loading ? <Loading /> : <ul className={s.blog}>
      {posts.map((post) => (
        <li key={post.id}><Link className={s.link} href={`/blog/${post.id}`}>{post.title}</Link></li>
      ))}
    </ul> 
  )
}