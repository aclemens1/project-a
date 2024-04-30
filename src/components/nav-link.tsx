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
    <a className={`flex align-middle leading-4 px-9 py-3 hover:foboh-text-hover ${path === href ? "text-foboh-main md:border-foboh-main md:border-e-2" : "text-foboh-text"}`} href={href}>
      <span className="flex-1">{children}</span>
      {isNew && <span className="text-xs text-foboh-impact font-semibold">NEW</span>}
    </a>
  );
};

export default NavLink
