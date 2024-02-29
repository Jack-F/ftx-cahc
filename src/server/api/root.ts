import { claimRouter } from "@/server/api/routers/claim";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  claim: claimRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
