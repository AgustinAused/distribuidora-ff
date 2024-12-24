import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

const Navbar = () => (
  <nav className="bg-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-green-600">
        Distribuidora FF
      </Link>
      <ul className="flex space-x-4">
        <li><Link href="/" className="text-gray-700 hover:text-green-600">Home</Link></li>
        <li><Link href="/products" className="text-gray-700 hover:text-green-600">Products</Link></li>
        <li><Link href="/aboutus" className="text-gray-700 hover:text-green-600">About Us</Link></li>
        <li><Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link></li>
      </ul>
    </div>
    <div className="container mx-auto flex justify-between items-center">
      <ThemeSwitcher/>
    </div>
  </nav>
);

export default Navbar;
