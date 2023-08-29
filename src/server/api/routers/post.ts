import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";


export const postRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      include: {
        user: true, // Include the related User model
      },
    });

    return posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      // Convert any other Date objects to string if needed
      updatedAt: post.updatedAt.toISOString(),
    }));
  }),

  create: protectedProcedure
    .input(
      z.object({
        content: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: {
          ...input,
          createdAt: new Date(),
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
});