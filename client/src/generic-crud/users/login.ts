import { client } from "../../../utils/trpc";

export async function handleLogin(input: string) {
    try {
    if (input === "" || typeof input !== "string" ) {
      throw new Error().message = "Please enter your name";
    }
    const res = await client.query('users.get', input);
    console.log(res);
    if (res === undefined) 
      throw new Error().message= "User not found";
    sessionStorage.setItem("userId", res);
        return true
    } 
  catch (error) {
    console.log(error);
    throw error;
  }
}