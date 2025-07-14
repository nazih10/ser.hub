import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10 mr-2" />
          أبو سريع
        </Link>
        <div className="flex space-x-6">
          <Link href="/products" className="hover:text-accent">المنتجات</Link>
          <Link href="/my-orders" className="hover:text-accent">طلباتي</Link>
          <Link href="/login" className="hover:text-accent flex items-center">
            <FaUser className="ml-1" /> دخول
          </Link>
          <Link href="/checkout" className="hover:text-accent flex items-center">
            <FaShoppingCart className="ml-1" /> السلة
          </Link>
        </div>
      </div>
    </nav>
  );
}