/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { trpc } from "../../utils/trpc";

const Login = () => {
    const [input, setInput] = useState("");
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const navigate = useNavigate();
    const res = trpc.users.get.useQuery(input);
    
    async function handleLogin() {
      try {
        if (input === "" || typeof input !== "string" ) {
          throw new Error().message = "Please enter your name";
        }
        await res.refetch();
        
        if (res.data === undefined) 
        throw new Error().message= "User not found";

        console.log(res.data);
        sessionStorage.setItem("userId", res.data.toString());
        navigate("/tasks");

        return null
      } 
    catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMsg(String(error));
    }
  }


  return (
    <div className="h-full flex justify-center items-center ">
        <div className="text-center shadow-lg border p-5 rounded-lg ">
            <h1 className="text-2xl">Login Here 👇</h1>
            <form 
            onSubmit={(e) => {e.preventDefault()}}
            className="flex flex-col items-center">
                <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} className={"border mt-6 rounded-md px-4 h-7 " + (isError ? "border-red-600" : "")}  
                placeholder="Name..."
                />
                <label className={`self-end text-red-600 ${ isError ? "block" : "hidden" }`}>{errorMsg}</label>
                <button 
                onClick={async () => {await handleLogin()}} 
                type="submit" 
                className="mt-6 bg-blue-600 box-border text-white border border-white transition rounded-md w-full py-2 hover:bg-white hover:text-black hover:border-black " >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login