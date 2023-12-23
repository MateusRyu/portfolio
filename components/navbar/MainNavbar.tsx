'use client'
 
import { usePathname } from 'next/navigation'

export default function MainNavbar() {
  const pathname = usePathname();
  const nav = [
    {
      label: "Página inicial",
      link: "/"
    },
    {
      label: "Aprendizado",
      link: "/aprendizado"
    },
    {
      label: "Projetos",
      link: "/projetos"
    },
    {
      label: "Sobre",
      link: "/sobre"
    },
    {
      label: "Contato",
      link: "Contato"
    }
  ];
  const navbar = nav.map( (item) => (pathname == item.link?<li key={item.link} className="disabled">
        <a href="#" className="text-accent">
          {item.label}
        </a>
      </li>:<li key={item.link}> 
        <a href={item.link} className="text-neutral-content">
          {item.label}
        </a>
      </li>
  ))

  return (
    <nav>
      <div className="navbar bg-neutral">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl text-neutral-content">
            Ryu
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navbar}
          </ul>
        </div>
      </div>
    </nav>
  )
}
