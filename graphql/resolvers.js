import prisma from "../lib/prisma";
export const resolvers = {
  Query: {
    user: async (_parent, { id }, _context) =>
      await prisma.blogPost.find({ id: id }),
    // blogPosts: async () => await prisma.blogPost.findMany({}),
    blogPosts: async (_parent, { id }, _context) => {
      console.log("id");
      await prisma.blogPost.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
  Mutation: {
    createBlogPostDraft: async (
      _parent,
      { title, body, authorId, slug },
      _context
    ) => {
      console.log(data);
      return prisma.blogPost.create({ data: { title, body, authorId, slug } });
    },
  },
};
