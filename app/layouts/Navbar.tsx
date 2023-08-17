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
    <NavbarBase isBordered className="py-2">
      <NavbarBrand>
        <RickyLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex justify-start" justify="center">
        <NavbarItem>
          <RickyAndMortyTitle className="hover:scale-110 transition-all" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <RickyLogo />
        </NavbarItem>
      </NavbarContent>
    </NavbarBase>
  );
};

export default Navbar;
