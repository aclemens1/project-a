interface NavIconProps {
  children: React.ReactNode
  className?: string
}

const NavIcon: React.FC<NavIconProps> = ( { children, className } ) => {
  return (
    <>
      <svg className={`inline-block w-5 h-5 fill-current ${className && className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        {children}
      </svg>
    </>
  );
};

export default NavIcon
