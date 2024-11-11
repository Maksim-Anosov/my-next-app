import { Metadata } from 'next';
import s from '../../page.module.css';

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { id } = await params;
  const data = await getData(id);

  return {
    title: data.title
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className={s.post}>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
