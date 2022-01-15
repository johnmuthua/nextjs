import prisma from "../lib/prisma";
import Header from "../components/header/Header";

export default function Home({ feed }) {
  return (
    <div className="bg-black">
      <Header />
      {feed.map((post, index) => (
        <li key={index}>
          <div>
            <h1>{post.title}</h1>
            <h4>{post.content}</h4>
          </div>
          <div>
            <h2>{post.published}</h2> -
          </div>
        </li>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return { props: { feed } };
};
