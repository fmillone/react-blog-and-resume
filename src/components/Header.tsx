import { useMemo } from 'react';
import styles from './Header.module.css'

export function Header({ title, subtitle, children }: any) {
  const content = useMemo(() =>
    typeof subtitle === 'string'
      ? <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      : children,
    [children, subtitle]);

  return (
    <header className="w-full container mx-auto">
      <div className="flex flex-col text-center pt-12">
        <h1 className={styles['main-title']}>
          {title}
        </h1>
        {content}
      </div>
    </header>
  );
}
