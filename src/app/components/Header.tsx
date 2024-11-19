import s from './style.module.css';
import { Navigation } from './Navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' }
];
export function Header() {
  return (
    <header className={s.header}>
      <Navigation links={links} />
    </header>
  );
}
