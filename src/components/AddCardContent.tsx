import { CloseIcon } from "../Icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export function AddCardContent({open,onClose}:{
    open: boolean;
    onClose:()=> void;
}){
    return <div>
    {open && <div> 
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
           
        </div>
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded fixed">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CloseIcon />
                        </div>
                    </div>
                    <div>
                        <Input type={"text"} placeholder={"Title"} />
                        <Input type={"text"} placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit" fullWidth={true} />
                    </div>
                </span>
            </div>     
        </div>
        
    </div>}
</div>
}