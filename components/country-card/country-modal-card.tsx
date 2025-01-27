"use client";
import { LocalizationContext, LocalizationProps } from "@/app/providers";
import { ICountry } from "@/types/dto";
import { getCountryAdjective } from "@/utils/localisation_utils";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useContext } from "react";



export default function CountryCard(props: {country: ICountry}) {
  const localization: LocalizationProps = useContext(LocalizationContext);
  return (<Card className="bg-zinc-200">
    <CardHeader className="flex flex-row justify-between pb-0 font-semibold">
      <span>{getCountryAdjective(props.country, localization)} Ideas</span>
      <Link href={"../country/compare?tags="+props.country._id} size="sm">Compare</Link></CardHeader>
    <CardBody className="py-0">
      <ul>
      {props.country.ideas.map(idea => 
        <li key={props.country.name + '_' + idea.name} className="flex flex-col justify-start items-start mt-4 font-semibold">
          {localization[idea.name] ?? idea.name}
          {idea.modifiers.map(modifier => 
            <div key={props.country.name + "_" + idea.name + "_" + modifier.name} className="flex flex-row justify-start items-center font-normal">
              <Image width={32} height={32} alt="test!" src={"/icons/"+modifier.name+".png"}/>
              {localization[modifier.name.toLowerCase()] ?? modifier.name}: {modifier.value > 0 ? "+" + modifier.value.toString() : modifier.value}
            </div>
            )
          }
          <Divider className="mt-2"/>
        </li>
      )}</ul>
    </CardBody>
    <CardFooter></CardFooter>
  </Card>);
}