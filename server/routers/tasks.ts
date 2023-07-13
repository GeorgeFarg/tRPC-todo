import z from "zod";
import { t } from "../trpc";
import { prisma } from "../script";

export const tasksRouter = t.router({
    createTask: t.procedure
    .input(z.object({ userId: z.number(), title: z.string()}))
    .mutation(async e => {
        try {
            await prisma.task.create({
                data: {
                    title: e.input.title,
                    isFinished: false,
                    userId: e.input.userId
                }
            });
            return true;
        } catch (err) {
            console.log("Error: " + err);
            throw err;
        }
    }),

    updateTask: t.procedure
    .input(z.object({ id: z.number(), title: z.string(), desc: z.string() }))
    .mutation(async e => {
        try {
            await prisma.task.create({
                data: {
                    title: e.input.title,
                    isFinished: false,
                    userId: 1
                }
            });
            return true;
        } catch (err) {
            console.log("Error: " + err);
            throw err;
        }
    }),

    deleteTask: t.procedure.input(z.number()).mutation(async e => {
        try {
            await prisma.task.delete({
                where: {
                    id: e.input
                }
            });
        } catch (err) {
            console.error(err)
            throw err;
        }
    }),

    finishTask: t.procedure.input(z.object({ taskId: z.number(), isFinished: z.boolean() })).mutation(async e => {
        try {
            await prisma.task.update({
                where: {
                    id: e.input.taskId
                },
                data: {
                    isFinished: e.input.isFinished
                }
            });
            console.log("check");
            
        } catch (err) {
            console.error(err)
            throw err;
        }
    }),

    getTask: t.procedure.input(z.number()).query(async e => {
        try {
            const result = await prisma.task.findFirst({
                where: {
                    id: e.input
                },
                select: {
                    id: true,
                    title: true,
                    isFinished: true
                }
            });
    
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
    }),

    getAllTasks: t.procedure.input(z.number()).query(async e => {
        try {
            const result = await prisma.task.findMany({
                where: {
                    userId: e.input
                }
            });
            console.log("ID: " + e.input);
            console.log(result);
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
    }),


})