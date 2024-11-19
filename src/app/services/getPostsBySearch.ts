import { Post } from "./types";

export async function getPostsBySearch(search: string): Promise<Post[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}