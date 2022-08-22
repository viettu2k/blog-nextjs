import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>BLOG NEXTJS</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-sapn-8 col-span-1">
          {posts.map((post, idx) => (
            <PostCard key={idx} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  console.log("🚀 ~ file: index.js ~ line 32 ~ getStaticProps ~ posts", posts);

  return {
    props: {
      posts,
    },
  };
}
