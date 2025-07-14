import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-primary mb-8">لوحة التحكم</h1>
        
        {loading ? (
          <p>جاري التحميل...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-right">الصورة</th>
                  <th className="p-3 text-right">الاسم</th>
                  <th className="p-3 text-right">السعر</th>
                  <th className="p-3 text-right">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-b">
                    <td className="p-3">
                      <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded" />
                    </td>
                    <td className="p-3">{product.name}</td>
                    <td className="p-3">{product.price} ر.س</td>
                    <td className="p-3">
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}