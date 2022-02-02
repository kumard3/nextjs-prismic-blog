import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import BlogPost from "../components/BlogPost";
import convertPrismicToData from "../utils/convertPrismicToData";
import Prismic from "@prismicio/client";
import richTextToMarkdown from "@edwinjoseph/prismic-richtext-markdown";

const emptySpaceRegex = /^(- .*)\n(\n^- )/gm;
const ONE_DAY_IN_SECONDS = 86400;

function test(datas) {
  richTextToMarkdown(datas).replace(emptySpaceRegex, "$1$2");
}

export async function getStaticProps(context) {
  const client = Prismic.client(
    "https://next-blog-cms.cdn.prismic.io/api/v2",
    {}
  );
  const data = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.blog_post.publish_date desc]" }
  );

  const posts = data.results.map((n) => {
    const converter = n.data.content
    const converted = richTextToMarkdown(converter).replace(emptySpaceRegex, "$1$2")


    return {
      date: n.data.date,
      content: converted,
      slug: n.uid,
      title: n.data.title[0].text,
      // content:n.
    };
  });

  return {
    props: {
      posts,
      revalidate: ONE_DAY_IN_SECONDS,
      data: data.results,
    },
  };
}

export default function Home({ posts, data }) {
  console.log(posts);
  console.log(data);
  // const content = posts.map((n) => n.data.content)
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        {
          posts.map(p => (
            <div className={styles.post} key={p.slug}>
              <BlogPost {...p} />
            </div>
          ))
        }
      </main>
    </>
  );
}
