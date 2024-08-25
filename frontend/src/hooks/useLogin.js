import { useState } from "react"
import { useAuthContext } from '../context/AuthContext';
import toast from "react-hot-toast";
const useLogin=()=>{
    const {setAuthUser}=useAuthContext()
    const [loading,setLoading]=useState(false)
    const login=async(username,password)=>{
        setLoading(true)
        try {
            const res=await fetch("/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password})
            })
            const data=await res.json()
            if(data.error)
            {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)
            toast.success("login successfull")
        } catch (error) {
            toast.error(error.message)
            
        }finally{
            setLoading(false)
        }

    }
    return {loading,login}
}
export default useLogin