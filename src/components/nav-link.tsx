import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLinkProps {
  href: string
  children: React.ReactNode
  isNew?: boolean
}

const NavLink: React.FC<INavLinkProps> = ( { href, children, isNew } ) => {
  
  const path = usePathname()

  return (
    <a className={`flex align-middle leading-4 px-9 py-3 text-slate-500 hover:text-slate-800 ${path === href ? "text-teal-700 md:border-teal-700 md:border-e-2" : ""}`} href={href}>
      <span className="flex-1">{children}</span>
      {isNew && <span className="text-xs text-red-600 font-semibold">NEW</span>}
    </a>
  );
};

export default NavLink
