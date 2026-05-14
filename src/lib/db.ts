import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Lazy proxy — PrismaClient is only instantiated on first query, not at module load.
// This prevents build-time failures when DATABASE_URL is not yet available.
function createPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ log: ["error"] });
  }
  return globalForPrisma.prisma;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop: string | symbol) {
    return (createPrisma() as any)[prop];
  },
});
