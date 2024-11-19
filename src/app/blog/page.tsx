'use client';
import { useEffect, useState } from 'react';
import { PostsList, SearchPosts } from '../components';
import { Post } from '../services/types';
import Loading from './loading';
import { getPosts } from '../services/getPosts';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <SearchPosts />
      {loading ? <Loading /> : <PostsList posts={posts} />}
    </div>
  );
}
