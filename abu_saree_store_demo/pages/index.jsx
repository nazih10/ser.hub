import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-orange-700">أبو سريع للمفروشات الأرضية</h1>
      <p className="mb-4">مرحباً بك في متجر أبو سريع - أفضل تشكيلة سجاد، موكيت، وبلاط مطاطي.</p>
      <Link href="/admin" className="text-blue-500 underline">اذهب إلى لوحة الإدارة</Link>
    </main>
  );
}