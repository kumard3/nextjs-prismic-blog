import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>My Blog</a>
      </Link>

      <div className={styles.menu}>
        <Link href="/about"><a>About</a></Link>
        <Link href="/archives"><a>Archives</a></Link>
      </div>
    </header>
  )
}
