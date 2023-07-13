/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../../../utils/trpc";

export async function checkTask(taskId: any, isFinished: boolean) {
    try {
        const res = await client.mutation('tasks.finishTask', {taskId: +taskId, isFinished});
        console.log(res);
    } catch (err) {
        console.error(err);
        throw err
    }
}