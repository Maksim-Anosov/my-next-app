import Link from "next/link";
import s from './style.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/blog'>Blog</Link>
    </header>
  );
}