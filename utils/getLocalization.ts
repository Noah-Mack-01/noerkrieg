import { LocalizationProps } from "@/app/providers";
import path from "path";
import yaml from "js-yaml";
import fs from "fs";

export async function getLocalization() {
  const localization: LocalizationProps = {};
      // Read YAML file from the actual file system
    const filePaths: string [] = [
      path.join(process.cwd(), 'public', 'localization', 'countries_l_english.yml'),
      path.join(process.cwd(), 'public', 'localization', 'text_l_english.yml'),
      path.join(process.cwd(), 'public', 'localization', 'drays_mp_tweaks_l_english.yml'),
      path.join(process.cwd(), 'public', 'localization', 'EU4_l_english.yml'),
      path.join(process.cwd(), 'public', 'localization', 'tmm_l_english.yml'),

  ]
    const fileContents = filePaths.map(filePath => fs.readFileSync(filePath, 'utf8'));
    fileContents.forEach(contents => Object.assign(localization, parseLocalizationYaml(contents)));

    console.log(localization["shock_damage"]);
    console.log(localization["shock_damage_received"])
    return localization;
}; // localizationParser.ts

// localizationParser.ts

export interface LocalizationEntry {
  key: string;
  value: string;
}

export function parseLocalizationYaml(content: string): LocalizationProps {
  try {
    const output: LocalizationProps = {};
    // First, preprocess the content to handle the ':0 ' format
    const processedContent = content
      .split('\n')
      .map(line => {
        // Skip empty lines or comments
        if (!line.trim() || line.trim().startsWith('#')) {
          return '';
        }
        // Replace ':0 ' with ': ' to make it valid YAML
        return line.replace(':0 ', ': ').replace(':1',': ');
      }).forEach(line => {
        let [key, val] = line.split(": ");
        output[key.replace("MODIFIER_","").trim().toLowerCase()] = val ? val.replaceAll('"', ''): '';

      })
      return output;
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return {};
  }
}

