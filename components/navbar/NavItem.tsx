import Link from "next/link";

export type NavItemProps = {
  href: string;
  active?: boolean;
  children: string;
};

function NavItem({href, active=false, children}: NavItemProps) {
  const linkStyle = active?"bg-accent-content text-accent md:bg-inherit":"hover:bg-primary hover:text-primary-content text-neutral-content md:hover:bg-inherit md:hover:text-primary ";
  return (
      <li className="flex p-0">
      <Link 
        href={href} 
        className={`w-full px-4 border-t-2 border-neutral-content md:border-t-0 ${linkStyle}`}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavItem;
