import { Post } from "./types";

export async function getPostsBySearch(search: string): Promise<Post[] | undefined> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}