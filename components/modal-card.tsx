'use client'
import { CardData } from "@/config/cards";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@nextui-org/drawer";
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";



export default function UpdateCards(cards: any = { cardData: []}) {
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

  return (
    <>
    <section className="flex flex-col justify-start grow-1" >
      <div className="text-lg"> Card Data </div>
      <ul className="flex flex-row justify-start grow-1">{
        cards.cardData.map((item: CardData)=><li key={item.header}>
          <Card isPressable onPress={()=>handleOpen(item)}><CardHeader>{item.header}</CardHeader><CardBody>{item.body}</CardBody></Card>
        </li>)}
      </ul>
    </section>
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleClose}>
      <DrawerContent>
        {(handleClose) => (<>
        <DrawerHeader>{drawerProperties.header}</DrawerHeader>
        <DrawerBody>{drawerProperties.body}</DrawerBody>
        <DrawerFooter>{(drawerProperties.tags ?? [])}</DrawerFooter>
  </>)}</DrawerContent>
    </Drawer></>
  )
}