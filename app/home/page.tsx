import { RecentlyUpdated } from "@/config/navigation";
import ResultsList from "@/components/results-list";

export default function Home() {
  return (
    <>
    <ResultsList {...{title: 'Recently Updated', results: RecentlyUpdated}}></ResultsList>
    </>
  );
}

