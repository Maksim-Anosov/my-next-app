import { PostsList, SearchPosts } from '../components';

export default function Blog() {
  return (
    <div style={{ height: '100%' }}>
      <SearchPosts />
      <PostsList />
    </div>
  );
}