import { Metadata } from 'next';
import s from './style.module.css';
import { getPost } from '@/app/services/getPost';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { id } = await params;
  const data = await getPost(id);

  return {
    title: data.title
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const data = await getPost(id);

  return (
    <div className={s.post}>
      <Link className={s.arrow} href="/blog"><MoveLeft size={50}/></Link>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
