
import CountryCard from "@/components/country-card/country-modal-card";
import { CountryModel, ICountry } from "@/types/dto";
import getDatabase from "@/utils/mongodb"; 
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { useSearchParams } from "next/navigation";

export default async function CompareCountriesComponent({searchParams}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  await getDatabase();
  const queries = (await searchParams)
  if (!queries) return <></>;
  const queryTag = queries['tags'] ? queries['tags'] : [];
  const countryTags = Array.isArray(queryTag) ? queryTag : [queryTag]
  const countries = (await Promise.all(countryTags.map(async tag => await CountryModel.findById(tag.toUpperCase())))).filter(item => !!item);
  return (
    <div className="flex flex-col justify-start items-stretch p-3 gap-y-3 w-full">
      <Form><Input name="add-countries" placeholder="Add countries by tag"></Input></Form>
      <div className="flex flex-row items-stretch gap-x-3">
        {countries.map(country => <CountryCard key={country._id} country={country}/>)}
      </div>
    </div>
  );
}