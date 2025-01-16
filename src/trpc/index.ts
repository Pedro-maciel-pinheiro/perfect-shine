import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "../lib/validators/query-validator";
import { getPayloadClient } from "../get-payload";
import { paymentRounter } from "./payment-router";

export const appRouter = router({
  auth: authRouter,
  payment: paymentRounter,

  // getBanner Query  

  getBanners: publicProcedure
    .input(
      z.object({
        limit: z.number().optional().default(1),
      }),
    )
    .query(async ({ input }) => {
      const payload = await getPayloadClient();
      const { docs } = await payload.find({
        collection: "Product-banner",
        limit: input.limit,
        depth: 1,
      });
      if (!docs || docs.length === 0) {
        return null;
      }
      return docs;
    }),

  // single Product Query

  getProduct: publicProcedure
  .input(
    z.object({
      limit: z.number().min(1).max(50).optional().default(1),
    }),
  )
  .query(async ({ input }) => {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "products",
      limit: input.limit,
      depth: 1,
    });
    if (!docs || docs.length === 0) {
      return null;
    }
    return docs;
  }),

   // InfiniteProduct Query

  getInfiniteProduct: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator,
      }),
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { sort, limit, ...queryOptions } = query;

      const payload = await getPayloadClient();

      const parsedQueryOptions: Record<string, { equals: string }> = {};

      Object.entries(queryOptions).forEach(([key, value]) => {
        parsedQueryOptions[key] = {
          equals: value,
        };
      });

      const page = cursor || 1;

      const {
        docs: items,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "products",
        where: {
          approvedForSale: {
            equals: "approved",
          },
          ...parsedQueryOptions,
        },
        sort,
        depth: 1,
        limit,
        page,
      });
      return {
        items,
        nextPage: hasNextPage ? nextPage : null,
      };
    }),
});

export type AppRouter = typeof appRouter;
