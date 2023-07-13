/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../../../utils/trpc";

export async function deleteTask(taskId: any) {
    try {
        const res = await client.mutation('tasks.deleteTask', +taskId);
        console.log(res);
    } catch (err) {
        console.error(err);
        throw err
    }
}