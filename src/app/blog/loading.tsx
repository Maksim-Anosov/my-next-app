'use client';
import s from './style.module.css'

export default function Loading() {
  return (
    <div className={s.container}><span className={s.preloader}></span></div>
  );
}