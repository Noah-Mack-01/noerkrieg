import { ReactNode } from "react";

export type CardData = {
  header: string,
  body: string | ReactNode
  tags?: string[];
}

