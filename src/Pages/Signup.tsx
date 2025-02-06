import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
// import { BACKEND_URL } from "../Config";
import axios from "axios";
import { z } from "zod";

const signupValidation = z.object({
  username: z.string().min(3, "username should be atleast 3 letters").max(10, "username should not exceed 10 characters"),
    password: z.string().min(8, "password should be atleast 8 letters").max(20, "password should not exceed 20 characters").regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit."
    )
})

export function Signup() {

  const usrRef = useRef<HTMLInputElement>();
  const passRef = useRef<HTMLInputElement>();

  const navigator = useNavigate();

  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  async function signup() {
    const username = usrRef.current?.value;
    const password = passRef.current?.value;

    const validationResult = signupValidation.safeParse({ username, password });
    console.log("Hi there i am at line 31");
    if (!validationResult.success) {
      // If validation fails, set the errors in state
      console.log("Hi there i am at line 34");
      const errorMessages: any = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0] === "username") {
          errorMessages.username = err.message;
        }
        if (err.path[0] === "password") {
          errorMessages.password = err.message;
        }
      });
      setErrors(errorMessages);
      console.log(errorMessages);
      //return; // Stop execution if validation fails
    }

    try {
      console.log("Hi there i am at line 49");
      await axios.post(`http://localhost:3000/api/v1/signup`, {
        username,
        password,
      },{
        withCredentials: true 
      });
      navigator("/Signin")
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
      <div className="bg-white rounded border-2 min-w-72 p-6">
        <Input reference={usrRef} type="text" placeholder={"Username"} errorMessage={errors.username}  />
        <Input reference={passRef} type="password" placeholder={"Password"} errorMessage={errors.password} />
        <div className="flex justify-center">
          <Button onClick={signup} variant="primary" text="Sign Up" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
