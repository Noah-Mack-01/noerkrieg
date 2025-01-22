import { MenuItem } from "@/config/navigation";
import PageHeader from "./page-header";
import { Divider } from "@nextui-org/divider";

export default function ListComponent(props: { title: string, ListedItems: MenuItem[]}) {
  return (
  <div>
    <span className="text-2xl font-bold">{props.title}</span>
    <Divider></Divider>
    <ul className="flex flex-col items-start justify-start">
      {props.ListedItems.map(item => <PageHeader {...item} key={item.label}/>)}
    </ul>
  </div>
  )
}