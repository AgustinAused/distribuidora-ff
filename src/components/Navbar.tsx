import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-900 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
        Distribuidora FF
      </Link>

      {/* Navegación */}
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Theme Switcher */}
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Navbar;
