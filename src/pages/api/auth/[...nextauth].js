import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "../../../../lib/prisma";

export default NextAuth({
  providers: [
    CredentialsProvider({
      //   name: "Email and password",

      credentials: {
        username: { label: "Email", type: "email", placeholder: "email", required: true },
        password: { label: "Password", type: "password", placeholder: "password", required: true },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;

        //check if email and password are entered
        if (!email || !password) {
          throw new Error("Please enter email or password");
        }

        //find user in database
        const user = await prisma.user.findUnique({ where: { email: email } });

        if (!user) {
          console.log("no users");
          throw new Error("Invalid login credentials");
        }

        //check if password is correct
        if (user.password !== password) throw new Error("Invalid login credentials");

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      //asigning a token to the user
      user && (token.user = user);
      //now the token has the user
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.user = token.user;

      return Promise.resolve(session);
    },
  },
  secret: "secret",
  jwt: {
    secret: "secret",
    encryption: true,
  },
  session: {
    jwt: true,
  },
});
