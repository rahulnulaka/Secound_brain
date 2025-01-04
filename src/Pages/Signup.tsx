import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
// import { BACKEND_URL } from "../Config";
import axios from "axios";

export function Signup() {
  const usrRef = useRef<HTMLInputElement>();
  const passRef = useRef<HTMLInputElement>();

  const navigator = useNavigate();

  async function signup() {
    const username = usrRef.current?.value;
    const password = passRef.current?.value;

    try {
      await axios.post(`http://localhost:3000/api/v1/signup`, {
        username,
        password,
      });
      navigator("/Signin")
    } catch (error:any) {
        console.log(error);
    }
  }

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
      <div className="bg-white rounded border-2 min-w-72 p-6">
        <Input reference={usrRef} type="text" placeholder="Username" />
        <Input reference={passRef} type="password" placeholder="Password" />
        <div className="flex justify-center">
          <Button onClick={signup} variant="primary" text="Sign Up" fullWidth={true} />
        </div>
      </div>
    </div>
  );
}
