import { create } from 'zustand'
import { Post } from '../services/types'

type Store = {
  posts: Post[],
  loading: boolean,
  setLoading: (boolean: boolean) => void,
  setPosts: (posts: Post[]) => void,
}

export const useStore = create<Store>()((set) => ({
  posts: [],
  loading: false,
  setPosts: (posts: Post[]) => set({ posts: posts }),
  setLoading: (boolean: boolean) => set({ loading: boolean })
}))