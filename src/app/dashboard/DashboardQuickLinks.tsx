import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { UserIcon, CogIcon } from "@heroicons/react/24/outline";

const links = [
  {
    href: "/profile",
    label: "Profile",
    icon: <UserIcon className='w-5 h-5 mr-2' />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <CogIcon className='w-5 h-5 mr-2' />,
  },
];

const DashboardQuickLinks = () => {
  return (
    <div className='flex gap-4 mt-2'>
      {links.map((link) => (
        <Card
          key={link.href}
          className='flex items-center px-4 py-2 hover:bg-muted transition cursor-pointer'
        >
          <Link href={link.href} className='flex items-center'>
            {link.icon}
            <span className='font-medium'>{link.label}</span>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default DashboardQuickLinks;
