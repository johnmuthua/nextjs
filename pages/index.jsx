import prisma from "../lib/prisma";
import Header from "../components/header/Header";
import Card from "../components/card/Card";

export default function Home({ feed }) {
  return (
    <div className="bg-gradient-to-b from-stone-700 to-stone-900 pt-12 ">
      <article className="">
        <Card feed={feed} />
      </article>
      <Header />
    </div>
  );
}

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({});

  return { props: { feed } };
};
