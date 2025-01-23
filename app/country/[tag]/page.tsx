
import getDatabase from "@/utils/mongodb";
 import { CountryModel, ICountry } from "@/types/dto"
export default async function CountryPage({params}: { params: Promise<{tag: string}>}) {
  await getDatabase();
  const tag = (await params).tag;
  const country = await CountryModel.findById(tag);
  return <div>{!!country ? <><span>{country.name}</span><ul>{country.ideas.map(idea => <li key={tag+"-idea-"+idea.position}>{idea.name}</li>)}</ul></>: ''}</div>
}

