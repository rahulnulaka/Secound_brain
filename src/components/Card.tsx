import { Delete } from "../Icons/Delete";
import { Share } from "../Icons/Share";
import { CardInterface } from "../Interfaces/CardInterface";

export function Card(props:CardInterface){
   return <div className="bg-white rounded-md border-2 max-w-72 min-h-48">
        <div className="p-4 flex justify-between items-center">
            <div className="cursor-pointer hover:bg-gray-200 rounded">
                {props.startIcon}
            </div>
            <div>
                {props.title}
            </div>
            <div className="flex items-center text-xs">
                <div className="pr-2 cursor-pointer hover:bg-gray-200 rounded"><Share/></div>
                <div className="cursor-pointer hover:bg-gray-200 rounded"><Delete/></div>
            </div>
        </div>
        <div className="p-4">
            {props.type === "youtube" && <iframe
            className="w-full rounded-md"
            src={props.link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>}
            {props.type === "tweet" && <blockquote className="w-full h-full twitter-tweet">
  <a href={props.link.replace("x.com" , "twitter.com")}></a> 
</blockquote>}
</div>
    </div>
}