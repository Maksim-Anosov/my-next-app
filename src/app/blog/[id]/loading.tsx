import s from '../style.module.css'

export default function Loading() {
  return (
    <div style={{ height: '80vh' }} className={s.container}><span className={s.preloader}></span></div>
  );
}