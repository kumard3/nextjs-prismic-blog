import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ArchivesPage.module.css'
import Header from '../components/Header'
import BlogPostArchiveLink from '../components/BlogPostArchiveLink'
import convertPrismicToData from '../utils/convertPrismicToData'
import Prismic from '@prismicio/client'

const ONE_DAY_IN_SECONDS = 86400

export async function getStaticProps(context) {
  const client = Prismic.client('https://my-blog-t.cdn.prismic.io/api/v2', {})
  const data = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings : '[my.blog_post.publish_date desc]' }
  )

  const posts = data.results.map(convertPrismicToData)

  return {
    props: {
      posts,
      revalidate: ONE_DAY_IN_SECONDS
    }
  }
}


export default function Archives({ posts }) {
  return (
    <>
      <Head>
        <title>Archives</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.title}>Archives</h1>

        {
          posts.map(p => (
            <div className={styles.post} key={p.slug}>
              <BlogPostArchiveLink {...p} />
            </div>
          ))
        }
      </main>
    </>
  )
}
