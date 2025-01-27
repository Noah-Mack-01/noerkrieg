"use client";
import { LocalizationContext, LocalizationProps } from "@/app/providers";
import { ICountry } from "@/types/dto";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { useContext } from "react";



export default function CountryModal(props: {country: ICountry}) {
  const localization: LocalizationProps = useContext(LocalizationContext);
  return (<Card>
    <CardHeader>{localization[props.country.name+"_ADJ"] ?? props.country.name} Ideas</CardHeader>
    <CardBody>
      <ul>
      {props.country.ideas.map(idea => 
        <li key={props.country.name + '_' + idea.name} className="flex flex-col justify-start items-start mt-4">
          {localization[idea.name] ?? idea.name}
          {idea.modifiers.map(modifier => 
            <div key={props.country.name + "_" + idea.name + "_" + modifier.name} className="flex flex-row justify-start items-center">
              <Image alt="test!" src={"/icons/"+modifier.name+".png"}/>
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