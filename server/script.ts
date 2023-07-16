import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export function connectToDB() {
    try {
        prisma.$connect();
        console.dir("prisma connected");
    }
    catch (err) {
        console.error("not connected");
    }
}