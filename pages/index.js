import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Header from "../components/Header";
import BlogPost from "../components/BlogPost";
import convertPrismicToData from "../utils/convertPrismicToData";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

// Project components & functions
import { Client } from "../utils/prismicHelpers";
import DefaultLayout from "../layouts";
import { Header, PostList, SetupRepo } from "../components/home";
import useUpdatePreviewRef from "../utils/useUpdatePreviewRef";

import richTextToMarkdown from "@edwinjoseph/prismic-richtext-markdown";

const emptySpaceRegex = /^(- .*)\n(\n^- )/gm;
const ONE_DAY_IN_SECONDS = 86400;

function test(datas) {
  richTextToMarkdown(datas).replace(emptySpaceRegex, "$1$2");
}

export async function getStaticProps(context) {
  // const client = Prismic.client(
  //   "https://next-blog-cms.cdn.prismic.io/api/v2",
  //   {}
  // );
  // const data = await client.query(
  //   Prismic.Predicates.at("document.type", "post"),
  //   { orderings: "[my.blog_post.publish_date desc]" }
  // );

  const previewRef = previewData ? previewData.ref : null;
  const refOption = previewRef ? { ref: previewRef } : null;

  const blogHome = (await Client().getSingle("blog_home", refOption)) || null;

  const postsQueryOptions = { orderings: "[my.post.date desc]", ...refOption };
  const posts = await Client().query(
    Prismic.Predicates.at("document.type", "post"),
    postsQueryOptions
  );

  // const posts = data.results.map((n) => {
  //   const converter = n.data.content
  //   const converted = richTextToMarkdown(converter).replace(emptySpaceRegex, "$1$2")

  //   return {
  //     date: n.data.date,
  //     content: converted,
  //     slug: n.uid,
  //     title: n.data.title[0].text,
  //     // content:n.
  //   };
  // });

  return {
    props: {
      blogHome,
      posts: posts ? posts.results : [],
      previewRef,
    },
  };
}

export default function Home({ blogHome, posts, previewRef }) {
  // console.log(posts);
  // console.log(data);
  // const content = posts.map((n) => n.data.content)
  
  useUpdatePreviewRef(previewRef, blogHome.id)

  if (blogHome && blogHome.data) {
    return (
      <DefaultLayout>
        <Head>
          <title>{RichText.asText(blogHome.data.headline)}</title>
        </Head>
        <Header
          image={blogHome.data.image}
          headline={blogHome.data.headline}
          description={blogHome.data.description}
        />
        <PostList posts={posts} />
      </DefaultLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};
