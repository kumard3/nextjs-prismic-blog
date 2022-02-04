import { useMemo } from 'react'
import Link from 'next/link'
import marked from 'marked'


const post = `px-[2rem]`
const titleStyle = `text-[2.5rem] mb-[4rem]`
const contentStyle = `text-[1.6rem]`
const contentP = `mb-[2rem]`
const contenth3 = `mt-[4rem] mb-[2rem]`
export default function BlogPost({
  slug,
  title,
  content,
  isMainPage
}) {
  const htmlContent = useMemo(() => marked(content), [content])

  return (
    <article className={`${post}`}>
      {
        slug
          ? (
            <Link href={'/blog/' + slug}>
              <a>
                {
                  isMainPage
                    ? <h1 className={`${titleStyle}`}>{title}</h1>
                    : <h2 className={`${titleStyle}`}>{title}</h2>
                }
              </a>
            </Link>
          )
          : (
            isMainPage
              ? <h1 className={`${title}`}>{title}</h1>
              : <h2 className={`${title}`}>{title}</h2>
          )
      }
      <div
        className={`${contentStyle}`}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  )
}
