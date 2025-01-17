import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import Navbar from "@/components/navbar";
import { NavigationConfig, RecentlyUpdated } from "@/config/navigation";
import UpdateCards from "@/components/modal-card";
import ResultsList from "@/components/results-list";

const UPDATE_CONFIG: any = {
  cardData: [{
    header: '1.0.0',
    body: 
    <ul>
      <LineItem {...{body:'Minor Updates'}}></LineItem> 
      <LineItem {...{body:'Blew up the moon'}}></LineItem> 
      <LineItem {...{body:'Patched Bohemian Ideas'}}></LineItem> 
    </ul>,
    tags: ['tag!']
  },{
    header: '0.0.99',
    body: 'Minor Bug Fixes',
    tags: ['we','blew','up','the','moon']
}] 
}
export default function Home() {
  return (
    <>
      <UpdateCards {...UPDATE_CONFIG}/>
      <ResultsList {...{title: 'Recently Updated', results: RecentlyUpdated}}></ResultsList>
    </>
  );
}


function ListBullet() {
  return (<span style={{fontSize:'5px'}}><i className="fa-solid fa-circle"></i></span>);
}

function LineItem(props: {body: string}) {
  return (<li className="flex flex-row w-full justify-start items-center space-x-5"><ListBullet/><span>{props.body}</span></li>);
}