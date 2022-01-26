import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";

import cors from "micro-cors";

const apolloServer = new ApolloServer({ typeDefs, resolvers });
// const startServer = apolloServer.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({
  path: "/api/graphql",
});

export default handler;

// export default cors(async function handler(req, res) {
//   if (req.method === "OPTIONS") {
//     res.end();
//     return false;
//   }
//   await startServer;
//   await apolloServer.createHandler({
//     path: "/api/graphql",
//   })(req, res);
// });
