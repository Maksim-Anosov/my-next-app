'use client';
import { Post } from "../services/types"
import s from './style.module.css'
import Link from "next/link";

type Props = {
  posts: Post[]
}

export function PostsList({ posts }: Props) {
  return (
    <ul className={s.blog}>
    {posts.map((post: { id: number; title: string }) => (
      <li key={post.id}><Link className={s.link} href={`/blog/${post.id}`}>{post.title}</Link></li>
    ))}
  </ul>
  )
}