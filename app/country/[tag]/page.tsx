
import getDatabase from "@/utils/mongodb";
 import { CountryModel, ICountry } from "@/types/dto"
import CountryModal from "@/components/country-card/country-modal-card";
import { ReactNode } from "react";
export default async function CountryPage({params}: { params: Promise<{tag: string}>}): Promise<ReactNode> {
  await getDatabase();
  const tag = (await params).tag;
  const country = await CountryModel.findById(tag.toUpperCase());
  if (!country) return <></>; // pick up nextjs routing
  else return (<CountryModal country={country}></CountryModal>)
}

