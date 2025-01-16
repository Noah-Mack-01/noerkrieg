import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import Navbar from "@/components/navbar";
import { NavigationConfig, RecentlyUpdated } from "@/config/navigation";
import { UPDATE_CONFIG } from "@/config/cards";
import UpdateCards from "@/components/modal-card";
import ResultsList from "@/components/results-list";


export default function Home() {
  return (
    <div className="flex flex-col justify-start align-center">
      <Navbar {...NavigationConfig}></Navbar>
      <UpdateCards {...UPDATE_CONFIG}/>
      <ResultsList {...{title: 'Recently Updated', results: RecentlyUpdated}}></ResultsList>
    </div>
  );
}