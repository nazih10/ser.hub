import { useState } from 'react';
export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", image: "", price: "" });

  const handleAdd = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", image: "", price: "" });
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">لوحة التاجر - إدارة المنتجات</h1>
      <div className="mb-4">
        <input placeholder="اسم المنتج" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="border p-2 mr-2" />
        <input placeholder="رابط الصورة" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} className="border p-2 mr-2" />
        <input placeholder="السعر" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} className="border p-2 mr-2" />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2">إضافة</button>
      </div>
      <ul>
        {products.map((p, i) => <li key={i}>{p.name} - {p.price}</li>)}
      </ul>
    </main>
  );
}