import { t } from "../trpc";
import { tasksRouter } from "./tasks";
import { usersRouter } from "./users";

export const appRouter = t.router({
    users: usersRouter,
    tasks: tasksRouter,
})
export type AppRouter = typeof appRouter; 
