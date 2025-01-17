'use client'
import { CardData } from "@/config/cards";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@nextui-org/drawer";
import { useDisclosure } from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import ResponsiveCardFooter from "./card-footer";



export default function UpdateCards(cards: any = { cardData: []}) {
  const router = useRouter();

  const DEFAULT_MODAL_CONFIG: CardData = { header: '', body: ''};
  const {onClose, onOpen, isOpen, onOpenChange} = useDisclosure();
  const [drawerProperties, setDrawerProperties] = useState(DEFAULT_MODAL_CONFIG as CardData); 
  function handleOpen(item: CardData) {
    console.log("test!"); 
    setDrawerProperties(item);
    onOpen();
  }

  function handleClose():void {
    setDrawerProperties(DEFAULT_MODAL_CONFIG);
    onClose();
  }

  function tags(tags: string[] | undefined
  ): ReactNode {
    return (tags ?? []).map(tag => <Button onPress={()=>{router.push('/search/'+tag)}} key={tag} size="sm" disabled={true}>{tag}</Button>);
  }

  return (
    <>
    <section className="flex flex-col justify-start grow-1" >
      <div className="text-lg"> Card Data </div>
      <ul className="flex flex-row justify-start grow-1 space-x-10">
        { cards.cardData.map((item: CardData)=>
        <li className="" key={item.header}>
          <Card className="p-3 min-w-72 max-w-sm" isPressable onPress={()=>handleOpen(item)}><CardHeader>{item.header}</CardHeader><CardBody>{item.body}</CardBody>
          <ResponsiveCardFooter {...{tags: item.tags ?? [], containerWidth: 200, onClick: ()=>handleOpen(item)}}></ResponsiveCardFooter>
          </Card>
        </li>)
        }
      </ul>
    </section>
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleClose}>
      <DrawerContent>
        {(handleClose) => (<>
        <DrawerHeader>{drawerProperties.header}</DrawerHeader>
        <DrawerBody>{drawerProperties.body}</DrawerBody>
        <DrawerFooter>{tags(drawerProperties.tags)}</DrawerFooter>
  </>)}</DrawerContent>
    </Drawer></>
  )
}
