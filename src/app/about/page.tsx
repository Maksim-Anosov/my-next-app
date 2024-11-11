import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <h1 style={{ textAlign: 'center', fontSize: '50px' }}>
      About
    </h1>
  );
}