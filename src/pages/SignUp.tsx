import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function SignUp() {

    const usernameref = useRef<HTMLInputElement>();
    const passwordref = useRef<HTMLInputElement>();
    const navigate  = useNavigate();

    async function signup() {
        const username = usernameref.current?.value;
        const password = passwordref.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            

        })
        navigate("/signin")
        alert("You have signed up")
        

    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white border min-w-48 p-8 rounded-xl">
            <Input reference={usernameref} placeholder="Username" />
            <Input reference= {passwordref} placeholder="Password" />
            
            <div className="flex justify-center pt-4 ">
                <Button onClick={signup} loading={false} variant="primary" text="Signup" size="xl"/>

            </div>

            
        </div>
    </div>
}