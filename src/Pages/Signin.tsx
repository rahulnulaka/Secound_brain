import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef, useState } from "react";
import axios from "axios";

export function Signin(){
    const usrRef = useRef<HTMLInputElement>();
  const passRef = useRef<HTMLInputElement>();

  const navigator = useNavigate();

  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  async function signin() {
    const username = usrRef.current?.value;
    const password = passRef.current?.value;

    const errorMessages: any = {};

    try {
      console.log("Hi there i am at line 49");
      await axios.post(`http://localhost:3000/api/v1/signin`, {
        username,
        password,
      },{
        withCredentials: true 
      });
      navigator("/dashboard")
    } catch (error: any) {
      errorMessages.password= "Incorrect Credentials";
      setErrors(errorMessages);
    }
  }


    return <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
        <div className="bg-white rounded border-2 min-w-72 p-6">
            <Input reference={usrRef} type="text" placeholder="Username"/>
            <Input reference={passRef} type="password" placeholder="Password" errorMessage={errors.password}/>
            <div className="flex justify-center">
                                    <Button onClick={signin} variant="primary" text="Sign In" fullWidth={true} />
                                </div>
        </div>
    </div>
}