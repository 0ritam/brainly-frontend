import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YouTubeIcon } from "../../icons/YouTubeIcon";
import { SideBarItem } from "./SidebarItem";

export function SideBar() {
    return <div className="h-screen top-0 left-0 bg-white border-r w-72 fixed pl-6">

        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-4 text-purple-700">
                <Logo size="lg" />
            </div>
            Brainitt!
        </div>

        <div className="pt-4 pl-4">
            <SideBarItem text="Twitter" icon={<TwitterIcon/>}/>

            <SideBarItem text="Youtube"
            icon={<YouTubeIcon/>} />
            
        </div>
    </div>

}