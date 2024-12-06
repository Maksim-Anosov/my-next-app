import { create } from 'zustand'
import { Post } from '../services/types'
import { getPosts } from '../services/getPosts';
import { getPostsBySearch } from '../services/getPostsBySearch';

type Store = {
  posts: Post[],
  loading: boolean,
  getPosts: () => Promise<Post[] | undefined>
  getPostsBySearch: (search: string) => Promise<Post[] | undefined>
}

export const useStore = create<Store>()((set) => ({
  posts: [],
  loading: false,
  getPosts: async () => {
    set({ loading: true });
    const data = await getPosts();
    set({ posts: data, loading: false });
    return data;
  },
  getPostsBySearch: async (search: string) => {
    set({ loading: true });
    const data = await getPostsBySearch(search);
    set({ posts: data, loading: false });
    return data;
  }
}))