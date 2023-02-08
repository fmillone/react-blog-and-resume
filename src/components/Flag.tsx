import { useSvgAsset } from '../common';

import styles from './Flag.module.css';

export function Flag({ code, alt }: any) {
  const src = useSvgAsset(`flags/${code}`);
  return (
    <img src={src} className={styles.flag} alt={alt}/>
  );
}