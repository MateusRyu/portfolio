'use client'
import { usePathname } from 'next/navigation';
import {useState} from 'react';

import Close from '../icons/Close';
import Hamburger from '../icons/Hamburger';

export interface Item {
  label: string;
  link: string;
};

export interface HeaderProps {
  brandName: string;
  navItems: Item[];
};

export default function Header({ brandName, navItems }: HeaderProps) {
  const [isClose, setIsClose] = useState(true);
  const toggleMenu = () => {
    setIsClose(!isClose);
  };
  const pathname = usePathname();
  const navbar = navItems.map( (item) => (pathname == item.link?<li key={item.link} className="disabled w-full">
        <a href="#" className="bg-accent-content text-accent">
          {item.label}
        </a>
      </li>:<li key={item.link} className="flex"> 
        <a href={item.link} className="px-4 w-full hover:bg-primary hover:text-primary-content text-neutral-content md:hover:bg-neutral md:hover:text-primary border-t-2 border-neutral-content md:border-t-0">
          {item.label}
        </a>
      </li>
  ))

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
      <nav>
        <ul className={isClose?"hidden":"flex flex-col md:hidden border-b-2 border-primary"}>
          {navbar}
        </ul>
      </nav>
    </header>
  )
}
