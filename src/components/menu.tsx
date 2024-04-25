import Link from "next/link"

const Menu = () => {
  return (
    <>
      <ul>
        <li className="inline-block mr-5"><Link href="/dashboard">Dashboard</Link></li>
        <li className="inline-block mr-5"><Link href="/orders">Orders</Link></li>
        <li className="inline-block mr-5"><Link href="/customers">Customers</Link></li>
        <li className="inline-block mr-5"><Link href="/products">Products</Link></li>
        <li className="inline-block mr-5"><Link href="/pricing">Pricing</Link></li>
        <li className="inline-block mr-5"><Link href="/freight">Freight</Link></li>
        <li className="inline-block mr-5"><Link href="/settings">Settings</Link></li>
      </ul>
    </>
  )
}

export default Menu
