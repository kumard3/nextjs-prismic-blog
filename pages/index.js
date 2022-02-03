import Head from "next/head";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

import { Client } from "../utils/prismicHelpers";
import DefaultLayout from "../layouts";
import { Header, PostList, SetupRepo } from "../components/home";
import useUpdatePreviewRef from "../utils/useUpdatePreviewRef";


export async function getStaticProps(context) {

  const previewRef = previewData ? previewData.ref : null;
  const refOption = previewRef ? { ref: previewRef } : null;

  const blogHome = (await Client().getSingle("blog_home", refOption)) || null;

  const postsQueryOptions = { orderings: "[my.post.date desc]", ...refOption };
  const posts = await Client().query(
    Prismic.Predicates.at("document.type", "post"),
    postsQueryOptions
  );
  return {
    props: {
      blogHome,
      posts: posts ? posts.results : [],
      previewRef,
    },
  };
}

export default function Home({ blogHome, posts, previewRef }) {
  
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

  return <SetupRepo />;
};
