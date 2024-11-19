import Link from "next/link"
import { Post } from "../services/types"
import { MoveLeft } from "lucide-react"
import s from './style.module.css'

type Props = {
  post: Post
}

export function PostCard({ post }: Props) {
  return (
    <div className={s.post}>
      <Link className={s.arrow} href="/blog"><MoveLeft size={50}/></Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}