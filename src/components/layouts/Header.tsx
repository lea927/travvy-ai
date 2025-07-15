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
        <Button
          asChild
          className='font-bold border border-black bg-white text-black hover:bg-gray-100'
        >
          <Link href='/login'>Login</Link>
        </Button>
        <Button asChild className='font-bold'>
          <Link href='/register'>Register</Link>
        </Button>
      </div>
    </NavigationMenu>
  );
};

export default Header;
