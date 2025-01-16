import { MenuItem } from "@/config/navigation";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function PageHeader(page: MenuItem) {
  return (
  <div className="flex flex-row justify-start items-center">
    {page.imageUrl ? (<Image alt="imageShouldBeHere" src={page.imageUrl}></Image>) : <div className="w-1/12"></div>}
    <span className="text-lg"><Link href="#">{page.label}</Link></span>
  </div>
  )  
}