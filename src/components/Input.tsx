import { InputInterface } from "../Interfaces/InputInterface";

export function Input(props : InputInterface){
return <div>
     <input  ref={props.reference} placeholder={props.placeholder} type={props.type} className="px-4 py-2 border-2 rounded m-2" ></input>
    </div>
}