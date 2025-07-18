import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/itinerary-builder", label: "Create Trip" },
  { href: "/my-trips", label: "My Trips" },
];

const DashboardHeader = () => (
  <nav className='mb-8 flex items-center gap-6 justify-center'>
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className='text-base font-semibold px-4 py-2 rounded-full hover:bg-primary/10 transition-colors text-primary'
      >
        {link.label}
      </Link>
    ))}
  </nav>
);

export default DashboardHeader;
