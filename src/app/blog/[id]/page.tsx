import { Metadata } from 'next';
import { getPost } from '@/app/services/getPost';
import { PostCard } from '@/app/components/Post';

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { id } = params;
  const data = await getPost(id);

  return {
    title: data.title
  };
}

export default async function Post({ params }: Props) {
  const { id } = params;
  const data = await getPost(id);

  return (
    <PostCard post={data} />
  );
}
