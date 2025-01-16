'use client'

import {
  Navbar as NextNavbar,
  NavbarBrand, 
  NavbarContent, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";

import React, { useState }  from "react";
import { NavConfig } from "@/config/navigation";
import { Form } from "@nextui-org/form";
import { useRouter } from "next/navigation";

export default function Navbar(config: NavConfig = {title: '', menuItems: []}) {
  const router = useRouter();
  function search(data: FormData) {
    console.log("search!");
    router.push('/search/'+data.get('query'))
  }

  return (
    <NextNavbar className="flex justify-start bg-gray-200">
      <NavbarContent justify="start" className="grow-0">
        <NavbarMenuToggle/>
        <NavbarBrand><span>{config.title}</span></NavbarBrand>
        <Form action={(data) => search(data)}><Input name="query" className="bg-gray-100" placeholder="Search..." ></Input></Form>
      </NavbarContent>
      <NavbarMenu>
          {config.menuItems.map((item) => <NavbarMenuItem key={item.label}>{item.label}</NavbarMenuItem>)}
      </NavbarMenu>
    </NextNavbar>
  )
}
