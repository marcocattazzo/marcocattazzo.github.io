import Link from 'next/link';
import styles from './ThreadCard.module.css';

export default function ThreadCard({ label, title, href, italicWord }) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={styles.title}>
        {italicWord ? (
          <>
            {title.split(italicWord)[0]}
            <em className={styles.titleItalic}>{italicWord}</em>
            {title.split(italicWord)[1]}
          </>
        ) : (
          title
        )}
      </span>
      <svg className={styles.arrow} width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
        <path d="M1 5 L20 5 M15 1 L20 5 L15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
