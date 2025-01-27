'use client'

import {
  Navbar as NextNavbar,
  NavbarBrand, 
  NavbarContent, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";
import { Input } from "@heroui/input";

import React, { useState }  from "react";
import { NavConfig } from "@/config/navigation";
import { Form } from "@heroui/form";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@heroui/link";

export default function Navbar(config: NavConfig = {title: '', menuItems: []}) {
  const router = useRouter();
  function search(data: FormData) {
    console.log("search!");
    router.push('/search/'+data.get('query'))
  }
  const currentPath = usePathname();

  return (
    <NextNavbar className="flex justify-start bg-gray-200">
      <NavbarContent justify="start" className="grow-0 justify-start">
        <NavbarMenuToggle/>
        <NavbarBrand className="grow-0"><span>{config.title}</span></NavbarBrand>
        {currentPath != '/' ? <button><Link href="/home"><i className="fa-solid fa-house text-black"></i></Link></button> : <></>}
        <Form className="grow" action={(data) => search(data)}><Input  name="query" className="bg-gray-100 grow" placeholder="Search..." ></Input></Form>
      </NavbarContent>
      <NavbarMenu>
          {config.menuItems.map((item) => <NavbarMenuItem key={item.label}>{item.label}</NavbarMenuItem>)}
      </NavbarMenu>
    </NextNavbar>
  )
}
