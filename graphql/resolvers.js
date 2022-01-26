import prisma from "../lib/prisma";
export const resolvers = {
  Query: {
    blogPosts: async () => await prisma.blogPost.findMany({}),
    blogPost: async (_parent, _args, _context) =>
      await prisma.blogPost({ id: _args.id }),
  },
};
