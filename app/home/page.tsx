import { RecentlyUpdated } from "@/config/navigation";
import ListComponent from "@/components/results-list";

export default function Home() {
  return (
    <>
    <ListComponent {...{title: 'Recently Updated', ListedItems: RecentlyUpdated}}></ListComponent>
    </>
  );
}

