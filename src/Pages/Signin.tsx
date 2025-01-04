import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin(){
    return <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
        <div className="bg-white rounded border-2 min-w-72 p-6">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <div className="flex justify-center">
                                    <Button variant="primary" text="Sign In" fullWidth={true} />
                                </div>
        </div>
    </div>
}