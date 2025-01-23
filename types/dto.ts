import mongoose, { mongo } from "mongoose"

export type CardData = {
  id: string
  name: string
  body: (string | string[])
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


export interface Update extends mongoose.Document {
  name: string;
  body: content[];
  tags: string[];
}

const Types = mongoose.Schema.Types;

const UpdateSchema = new mongoose.Schema<Update>({
  name: {
    type: Types.String,
    required: true,
  },
  body: {
    type: [Types.Mixed],
    required: true,
    validate: {
      validator: (arr: any[]) => {
        return arr.every(item => typeof item === 'string' || 
          (Array.isArray(item) 
            && item.every(subItem => typeof subItem === 'string')
          )
        )
      },
      message: "Body must consist of strings or string[]s."
    }
  },
  tags: {
    type: [Types.String]
  }
})

export const UpdateModel = mongoose.connection.useDb('noerkrieg').model("UPDATES", UpdateSchema, "UPDATES");


