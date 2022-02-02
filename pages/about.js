import Head from 'next/head'
import styles from '../styles/BlogPage.module.css'
import Header from '../components/Header'
import BlogPost from '../components/BlogPost'
import convertPrismicToData from '../utils/convertPrismicToData'
import Prismic from '@prismicio/client'

const ONE_DAY_IN_SECONDS = 86400

export async function getStaticProps(context) {
  const client = Prismic.client('https://my-blog-t.cdn.prismic.io/api/v2', {})
  const data = await client.getByUID('content_page', 'about')

  return {
    props: {
      data: convertPrismicToData(data),
      revalidate: ONE_DAY_IN_SECONDS
    }
  }
}

export default function About({ data }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <BlogPost isMainPage {...data} />
      </main>
    </>
  )
}
