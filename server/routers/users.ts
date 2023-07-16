import { prisma } from "../script";
import { t } from "../trpc";
import { z } from "zod";



export const usersRouter = t.router({
    create: t.procedure.input(z.string()).mutation(async (e) => {
        try {
            await prisma.user.create({
                data: {
                    name: e.input
                }
            });
            return true;
        } catch (err) {
            return false
        }
    }),

    delete: t.procedure.input(z.number()).mutation(async e => {
        try {
            await prisma.user.delete({
                where: {
                    id: e.input
                }
            });

            return true
        } catch (err) {
            console.log(err);
            
            return false
        }
    }),

    update: t.procedure.input(z.object({ id: z.number(), name: z.string() })).mutation(async e => {
        try {
            await prisma.user.update({
                where: {
                    id: e.input.id
                },
                data: {
                    name: e.input.name
                }
            });

            return true
        } catch (err) {
            console.log(err);
            return false
        }
    }),

    get: t.procedure.input(z.string()).query(async e => {
        const result = await prisma.user.findFirst({
            where: {
                name: e.input
            }
        });
        console.log(result);
        
        return result?.id;
    })
}) 