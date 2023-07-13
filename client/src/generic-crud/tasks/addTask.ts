/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../../../utils/trpc";

export async function addTask(userId: any, title: string) {
    try {
        const res = await client.mutation('tasks.createTask', { userId: +userId, title});
        console.log(res);
    } catch (err) {
        console.error(err);
        throw err
    }
}