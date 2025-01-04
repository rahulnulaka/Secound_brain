import { ButtonInterface } from "../Interfaces/ButtonInterface";

const variantStyles ={
    "primary" : "bg-blue-600 text-white",
    "secoundary" : "bg-blue-300 text-blue-600",
}

const defaultStyles = "px-2 py-2 rounded-md font-light";

const hoverStyle = "cursor-pointer hover:bg-blue-200";

export function Button(props: ButtonInterface){
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${hoverStyle} ${props.fullWidth?"w-full flex justify-center items-center":""}`}>
        <div className="flex items-center">
            <div className="p-2">
            {props.startIcon}
            </div>
        {props.text}
        </div>
    </button>
}