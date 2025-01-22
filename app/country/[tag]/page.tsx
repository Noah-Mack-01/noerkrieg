
import { Document, FindCursor, ObjectId, WithId,  } from "mongodb";
import { model, Model, Schema } from "mongoose";
 
export default async function CountryPage({params}: { params: Promise<{tag: string}>}) {
  /*
  const tag = (await params).tag;
  const result = await coll.findOne({_id: tag.toUpperCase()});
  const output = jsonToCountry(result);
  return (<div>
    <span>{output._id.toString()}</span>
    <ul>
    {output.ideas.map(idea => <li key={idea.name}>{idea.name}</li>)}
    </ul>
    </div>)
}


type CountryPageData = {
  _id: ObjectId;
  name: string;
  ideas: CountryIdea[];
  culture?: string;
  body?: string;
}

type CountryIdea = {
  position: number;
  name: string;
  patch: boolean;
  modifiers: {name: string, value: number}[];
}

interface ICustomDocument extends Document {
  _id: string;
  name: string;
};
type CustomDocumentModel = Model<ICustomDocument, {}, {}, {}, ICustomDocument>;

const schema = new Schema<ICustomDocument>(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    // ... other fields
  },
  { _id: false }  // Disable auto _id
);
const CustomModel = model<ICustomDocument, CustomDocumentModel>('Custom', schema);

function jsonToCountry(json: any): CountryPageData {
  return {
    _id: json._id,
    name: json.name,
    culture: json.culture,
    body: json.body,
    ideas: (json.ideas as any[]).map(idea => {
      return {
        name: idea.name as string, 
        position: idea.position as number,
        modifiers: [] as any[], patch: false as boolean};
    })
  };*/
}

