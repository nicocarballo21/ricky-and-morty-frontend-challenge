"use client";
import React from "react";
import {
  Navbar as NavbarBase,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { RickyAndMortyTitle, RickyLogo } from "../assets";

const Navbar = () => {
  return (
    <NavbarBase isBordered className="py-2 flex z-[50]">
      <NavbarBrand className="hidden sm:flex">
        <RickyLogo />
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <RickyAndMortyTitle className="hover:scale-110 transition-all" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <RickyLogo />
        </NavbarItem>
      </NavbarContent>
    </NavbarBase>
  );
};

export default Navbar;
