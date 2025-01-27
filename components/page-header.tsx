import { MenuItem } from "@/config/navigation";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import Link from "next/link";

export default function PageHeader(page: MenuItem) {
  return (<>
  <div className="flex flex-row justify-start items-start  p-2 pt-3">
    {page.imageUrl ? (<Image alt="imageShouldBeHere" src={page.imageUrl}></Image>) : <div className="w-1/12"></div>}
    <span className="text-xl font-semibold"><Link href="#">{page.label}</Link></span>
  </div>
  <Divider></Divider></>
  )  
}