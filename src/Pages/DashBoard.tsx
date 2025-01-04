import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
import { Plus } from "../Icons/Plus";
import { Share } from "../Icons/Share";
import { AddCardContent } from "../components/AddCardContent";

export function DashBoard(){

    const [openContentBar,setOpenContentBar] = useState(false);

    return <div>
      <SideBar/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <AddCardContent open={openContentBar} onClose={()=>{
            setOpenContentBar(false);
        }}/>
      <div className="m-4 flex justify-end">
        <div className="pr-2">
      <Button variant="primary" text="Add Content" startIcon={<Plus/>} onClick={()=>{
        setOpenContentBar(true);
      }}/>
      </div>
      <Button variant="secoundary" text="Share Brain" startIcon={<Share/>}/>
      </div>
      <div className="flex gap-4">
          <Card startIcon={<Plus/>} title="JavaScript In 2 Hours" link="https://www.youtube.com/watch?v=ikYSXXfiNxY" type="youtube"/>
          <Card startIcon={<Plus/>} title="First Tweet" link="https://x.com/XDevelopers/status/1861111894100320572" type="tweet"/>
      </div>
    </div>
    </div>
}