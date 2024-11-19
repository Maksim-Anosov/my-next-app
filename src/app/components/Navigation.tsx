'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from './style.module.css'
import clsx from "clsx";

type NavLink = {
  href: string;
  label: string;
};

type Props = {
  links: NavLink[];
};

export function Navigation({ links }: Props) {
  const pathname = usePathname();

  return (
    <nav className={s.header}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(s.link, pathname === href && s.active)}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}