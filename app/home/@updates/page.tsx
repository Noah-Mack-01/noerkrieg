import UpdateCards from "@/components/card/modal-card";
import { CardData } from "@/types/dto";
import { getCollection } from "@/utils/mongodb";
import { FindCursor } from "mongodb";




export default async function UpdatesBar() {
  const coll = await getCollection('noerkrieg','Updates');
  const cardsResult: FindCursor<any> = await coll.find({});
  const cards = await cardsResult.map(card => CardData(card)).toArray();
  return await <><UpdateCards {...{cardData: cards}}/></>
}

