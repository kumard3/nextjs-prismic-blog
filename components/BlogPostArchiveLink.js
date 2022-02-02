import Link from 'next/link'
import styles from '../styles/BlogPostArchiveLink.module.css'
import formatDate from '../utils/formatDate'

export default function BlogPostArchiveLink({
  slug,
  title,
  date
}) {
  return (
    <div className={styles.post}>
      <Link href={'/blog/' + slug}>
        <a className={styles.title}>{title}</a>
      </Link>

      <time>{formatDate(date)}</time>
    </div>
  )
}
