export interface InputInterface{
    placeholder:string;
    reference?:any;
    type:string;
    onChange?: ()=>void;
    errorMessage?:string;
}