import { MenuItem } from "@/config/navigation";
import PageHeader from "./page-header";
import { it } from "node:test";
import { Divider } from "@nextui-org/divider";

export default function ResultsList(props: { title: string, results: MenuItem[]}) {
  return (
  <div>
    <span className="text-lg">{props.title}</span>
    <Divider></Divider>
    <ul className="flex flex-col align-center justify-start">
      {props.results.map(item => <PageHeader {...item} key={item.label}/>)}
    </ul>
  </div>
  )
}