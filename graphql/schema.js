import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    createdAt: String
    updateAt: String
    email: String!
    image: String
    role: String!
    questions: [String]
    answers: [String]
    questionComments: [String]
    answerComments: [String]
    blogs: [String]
    blogComments: [String]
    profile: [String]
  }
  type Question {
    id: ID!
    title: String!
    body: String!
    slug: String
    createdAt: String
    updateAt: String
    likes: Int
    views: Int
    tags: String
    category: String
    author: User
    published: String
    answers: [String]
    comments: [String]
  }
  type Answer {
    id: ID!
    body: String
    slug: String
    createdAt: String
    updateAt: String
    likes: Int
    author: User
    comments: [String]
  }
  type QuestionComment {
    id: ID!
    body: String
    createdAt: String
    updateAt: String
    author: User
    questionId: String
  }
  type AnswerComment {
    id: ID!
    body: String
    createdAt: String
    updateAt: String
    author: User
    answerId: String
  }
  type BlogPost {
    id: ID!
    title: String
    body: String
    slug: String
    createdAt: String
    updateAt: String
    likes: Int
    views: Int
    tags: String
    category: String
    author: User
    published: String
    comments: [String]
  }
  type BlogComment {
    id: ID!
    body: String
    createdAt: String
    updateAt: String
    likes: Int
    author: User
    blogId: String
  }
  type Profile {
    id: ID!
    username: String
    githubUrl: String
    twitterUrl: String
    profilePicUrl: String
    occupation: String
    category: String
    tech: String
    author: User
  }
  type Query {
    question: [Question]!
    profile: [Profile]!
    blogPosts: [BlogPost]!
    blogPost: BlogPost!
    user: [User]!
  }
`;
