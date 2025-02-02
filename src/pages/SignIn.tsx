import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useNavigate } from "react-router-dom";

export function SignIn() {

    const usernameref = useRef<HTMLInputElement>();
    const passwordref = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameref.current?.value;
        const password = passwordref.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            

        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")

        //redirect user to dashboard


    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white border min-w-48 p-8 rounded-xl">
            <Input reference={usernameref} placeholder="Username" />
            <Input reference={passwordref} placeholder="Password" />
            
            <div className="flex justify-center pt-4 ">
                <Button onClick={signin} loading={false} variant="primary" text="Signin" size="xl"/>

            </div>

            
        </div>
    </div>
}