import { getPosts } from "../services/getPosts";
import { PostsList } from "../components/PostsList";

export default async function Blog() {
  const data = await getPosts();

  return (
    <div>
      <PostsList posts={data} />
    </div>
  );
}
