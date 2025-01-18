import { ObjectId } from "mongodb"
import { ReactNode } from "react"

export type CardData = {
  id: string
  name: string
  body: content[]
  tags: string[]
}

type content = string | string[]

export function CardData(json: any): CardData {
  return {
    id: json._id.toString(),
    name: json.name,
    body: json.body,
    tags: json.tags,
  }
}