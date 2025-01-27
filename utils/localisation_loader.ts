import { LocalizationProps } from "@/app/providers";
import path from "path";
import fs from "fs";
import { ICountry } from "@/types/dto";

export async function getLocalization() {
  const localization: LocalizationProps = {};
      // Read YAML file from the actual file system
    const basePath = path.join(process.cwd(), 'public', 'localisation');
    const filePaths: string [] = fs.readdirSync(basePath).filter(path => path.includes("english")).map(path => basePath+"/"+path);
    const fileContents = filePaths.map(filePath => fs.readFileSync(filePath, 'utf8'));
    fileContents.forEach(contents => Object.assign(localization, parseLocalizationYaml(contents)));
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
        const newKey = key.replaceAll("MODIFIER_", "").replaceAll("_MODIFIER", "").replaceAll("YEARLY_","").trim().toLowerCase();
        output[newKey] = val ? val.replaceAll('"', ''): '';

      })
      return output;
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return {};
  }
}

