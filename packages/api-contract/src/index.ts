import { z } from 'zod';
import { initTRPC } from '@trpc/server';

/**
 * tRPC initialization for Manar Capital API
 * 
 * This creates the core tRPC instance that will be shared across
 * all applications in the monorepo.
 */
const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 */
export const router = t.router;
export const publicProcedure = t.procedure;

/**
 * Health check input/output schemas
 */
export const healthCheckOutput = z.object({
  status: z.enum(['healthy', 'degraded', 'unhealthy']),
  timestamp: z.string(),
  version: z.string(),
});

export type HealthCheckOutput = z.infer<typeof healthCheckOutput>;

/**
 * Example user schemas for type-safe API contracts
 */
export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
  createdAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

/**
 * Example app router definition
 * This serves as a contract between frontend and backend
 */
export const appRouter = router({
  health: publicProcedure
    .output(healthCheckOutput)
    .query(() => ({
      status: 'healthy' as const,
      timestamp: new Date().toISOString(),
      version: '0.1.0',
    })),
});

export type AppRouter = typeof appRouter;

/**
 * Re-export zod for consumers
 */
export { z };
