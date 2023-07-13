import { client } from "../../../utils/trpc";

export async function getAllTasks(userId: any) {
    try {
        const res = await client.query('tasks.getAllTasks', +userId);
        console.log(res);
        if (res === undefined) 
        throw new Error("There is no tasks");
        return res
    } 
  catch (error) {
    console.error(error);
    throw error;
  }
}