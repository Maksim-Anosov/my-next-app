import Link from "next/link";
import s from '../page.module.css'
import clsx from "clsx";
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();

  return (
    <div>
      <ul className={clsx(s.container, s.blog)}>
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
