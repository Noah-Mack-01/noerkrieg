'use client'
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@nextui-org/drawer";
import { useDisclosure } from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import ResponsiveCardFooter from "./card-footer";
import { CardData, Update } from "@/types/dto";



export default function UpdateCards(cards: { cardData: Update[]}) {
  const router = useRouter();

  const DEFAULT_MODAL_CONFIG: Update = {_id: '', name: '', body: [''], tags: []} as any;
  const {onClose, onOpen, isOpen, onOpenChange} = useDisclosure();
  const [drawerProperties, setDrawerProperties] = useState(DEFAULT_MODAL_CONFIG as Update); 
  function handleOpen(item: Update) {
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

function LineItem(props: {body: string}) {
  return (
  <li className="flex flex-row w-full justify-start items-center space-x-5">
    <span style={{fontSize:'5px'}}><i className="fa-solid fa-circle"></i></span>
    <span>{props.body}</span>
  </li>);
}
 
function produceBodyContents(content: (string | string[])[]):ReactNode {
  return (<> { content.map((item, key) => !Array.isArray(item) ? 
      <span key={key}>
        {item}
      </span> : 
      <ul key={key}>
        {item.map((line, index) => <LineItem key={index} {...{body: line}}></LineItem>)}
      </ul>
  )}</>);
}

 function dtoToCard(cardData: Update): ReactNode {
    return( 
      <Card className="p-3 min-w-72 max-w-sm" isPressable onPress={()=>handleOpen(cardData)}>
        <CardHeader className="text-xl font-semibold">{cardData.name}</CardHeader>
        <CardBody className="max-h-52 overflow-clip">{produceBodyContents(cardData.body)}<div className="absolute w-full h-full bg-gradient-to-t from-white to-transparent inset-0"></div></CardBody>
        <ResponsiveCardFooter {...{tags: cardData.tags ?? [], containerWidth: 200, onClick: ()=> handleOpen(cardData)}}/>
      </Card>);
  }

  return (
    <>
    <section className="flex flex-col justify-start grow-1" >
      <div className="text-2xl font-bold"> Mod Updates </div>
      <ul className="flex flex-row justify-start grow-1 space-x-10">
        { cards.cardData.map(dtoToCard) }
      </ul>
    </section>
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleClose}>
      <DrawerContent>
        {(handleClose) => (<>
          <DrawerHeader>{drawerProperties.name}</DrawerHeader>
          <DrawerBody>{produceBodyContents(drawerProperties.body)}</DrawerBody>
          <DrawerFooter className="flex flex-wrap">{tags(drawerProperties.tags)}</DrawerFooter>
        </>)}
      </DrawerContent>
    </Drawer></>
  )
}
