'use client'
import {useState} from 'react';
import { usePathname } from 'next/navigation';

import Close from '../icons/Close';
import Hamburger from '../icons/Hamburger';
import NavItem from './NavItem';

export type Item = {
  label: string;
  link: string;
  active?: boolean
};

export type HeaderProps = {
  brandName: string;
  navItems: Item[];
};

export default function Header({ brandName, navItems }: HeaderProps) {
  const [isClose, setIsClose] = useState(true);
  const toggleMenu = () => {
    setIsClose(!isClose);
  };
  const pathname = usePathname();

  for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].active || pathname === navItems[i].link) {
      navItems[i].active = true;
    } else {
      navItems[i].active = false;
    }
  }

  const navbar = navItems.map((item) => (
    <NavItem key={item.link} href={item.link} active={item.active}>
      {item.label}
    </NavItem>
  )); 

  return (
    <header className="bg-neutral py-0 px-0">
      <nav className="w-full flex flex-row items-center justify-between px-4 md:px-8 lg:px-12">
        <a className="text-3xl text-neutral-content" href="/">
          { brandName }
        </a>
        <ul className="hidden md:flex flex-row gap-4 px-1">
          {navbar}
        </ul>
        <button className="md:hidden btn btn-ghost" onClick={toggleMenu}>
          <Hamburger color="white" className={isClose?"block":"hidden"} />
          <Close color="white" className={isClose?"hidden":"block"} />
        </button>
      </nav>
      <nav aria-label="mobile">
        <ul className={isClose?"hidden":"flex flex-col md:hidden border-b-2 border-primary"}>
          {navbar}
        </ul>
      </nav>
    </header>
  )
}
