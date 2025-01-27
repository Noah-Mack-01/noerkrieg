"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext } from "react";

export type LocalizationProps = {[key: string]: string};
export const LocalizationContext = createContext({});

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  localization : LocalizationProps; 
}
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}


function LocalizationProvider({localization, children}: { 
  localization: LocalizationProps, 
  children: React.ReactNode}) {
  return <LocalizationContext.Provider value={localization}>{children}</LocalizationContext.Provider>
}

export function Providers({ children, themeProps, localization}: ProvidersProps) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <LocalizationProvider {...{localization}}>
          {children}
          </LocalizationProvider>
        </NextThemesProvider>
    </HeroUIProvider>
  );
}
