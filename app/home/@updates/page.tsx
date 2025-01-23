import mongoose from "mongoose";
import UpdateCards from "@/components/card/modal-card";
import { Update } from "@/types/dto";
import { UpdateModel } from "@/types/dto";
import getDatabase from "@/utils/mongodb";
export default async function UpdatesBar() {
  await getDatabase();
  console.log(await mongoose.connection.listDatabases());
  console.log(await mongoose.connection.collections);
  const updates: Update[] = await UpdateModel.find({}).exec()
  return <><UpdateCards {...{cardData: updates}}/></>
}

