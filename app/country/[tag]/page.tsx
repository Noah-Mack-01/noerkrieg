
import getDatabase from "@/utils/mongodb";
 import { CountryModel, ICountry } from "@/types/dto"
import CountryModal from "@/components/country-card/country-modal-card";
import { ReactNode } from "react";
import { getLocalization } from "@/utils/localisation_loader";
export default async function CountryPage({params}: { params: Promise<{tag: string}>}): Promise<ReactNode> {
  await getDatabase();
  const localisation = await getLocalization();
  const tag = (await params).tag;
  const country = await CountryModel.findById(tag.toUpperCase());
  if (!country) return <></>; // pick up nextjs routing
  else return (
    <div className="flex flex-row justify-start">
      <CountryModal country={country}></CountryModal>
      <div className="flex flex-col justify-start items-stretch">
        <span className="font-bold text-2xl">{localisation[country.name.toLowerCase()]}</span>
        <span>{localisation[country.body]}</span>
      </div>
    </div>
  )
}

