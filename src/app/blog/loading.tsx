'use client';
import s from './style.module.css'

export default function Loading() {
  return (
    <div style={{ height: '100%' }} className={s.container}><span className={s.preloader}></span></div>
  );
}