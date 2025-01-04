import { Brain } from "../Icons/Brain";
import { Twitter } from "../Icons/Twitter";
import { Youtube } from "../Icons/Youtube";
import { SideBarItem } from "./SideBarItem";

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
    <div className="flex text-2xl pt-8 items-center">
        <div className="pr-2 text-purple-600">
           <Brain/>
        </div>
        <h2>Brainly</h2>
    </div>
    <div className="pt-8 pl-4">
        <SideBarItem text="Twitter" icon={<Twitter/>}/>
        <SideBarItem text="Youtube" icon={<Youtube/>}/>
    </div>
</div>
}