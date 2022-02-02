import { useMemo } from 'react'
import Link from 'next/link'
import styles from '../styles/BlogPost.module.css'
import marked from 'marked'

export default function BlogPost({
  slug,
  title,
  content,
  isMainPage
}) {
  const htmlContent = useMemo(() => marked(content), [content])

  return (
    <article className={styles.post}>
      {
        slug
          ? (
            <Link href={'/blog/' + slug}>
              <a>
                {
                  isMainPage
                    ? <h1 className={styles.title}>{title}</h1>
                    : <h2 className={styles.title}>{title}</h2>
                }
              </a>
            </Link>
          )
          : (
            isMainPage
              ? <h1 className={styles.title}>{title}</h1>
              : <h2 className={styles.title}>{title}</h2>
          )
      }
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  )
}
