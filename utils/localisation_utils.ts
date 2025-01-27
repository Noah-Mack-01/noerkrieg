import { LocalizationProps } from "@/app/providers";
import { ICountry } from "@/types/dto";

export function getCountryAdjective(country: ICountry, localisation: LocalizationProps): string {
  return localisation[country.name.toLowerCase()+"_adj"] ?? country.name;
}
export function getCountryName(country: ICountry, localisation: LocalizationProps): string {
  return localisation[country.name.toLowerCase()] ?? country.name;
}