"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuLink
        asChild
        className={navigationMenuTriggerStyle() + " text-lg font-bold"}
      >
        <Link href='/'>travvy.ai</Link>
      </NavigationMenuLink>
      <NavigationMenuList className='flex space-x-8'>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href='/'>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href='/product'>Product</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href='/pricing'>Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className='space-x-4'>
        <MotionButton
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          asChild
          className='font-bold border border-black bg-white text-black hover:bg-gray-100'
        >
          <Link href='/login'>Login</Link>
        </MotionButton>
        <MotionButton
          whileHover={{ y: -2 }}
          transition={{ duration: 0.05 }}
          asChild
          className='font-bold bg-secondary-foreground'
        >
          <Link href='/register'>Register</Link>
        </MotionButton>
      </div>
    </NavigationMenu>
  );
};

export default Header;
