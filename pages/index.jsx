import prisma from "../lib/prisma";
import Header from "../components/header/Header";

export default function Home({ posts }) {
  console.log("here we come");
  console.log(posts);
  return (
    <div className="bg-gradient-to-b from-stone-700 to-stone-900 pt-12 ">
      <article className="">{/* <Card feed={feed} /> */}</article>
      <Header />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await prisma.blogPost.findMany();

  return {
    props: { posts },
  };
};
