import styles from './Loading.module.css';

export function Loading() {
  return (
    <div className='grid h-screen place-items-center'>
      <div className={styles.loading}></div>
    </div>
  );
}
