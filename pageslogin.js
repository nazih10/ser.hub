import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AuthForm from '../components/AuthForm';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (values) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      
      if (res.ok) {
        router.push('/');
      } else {
        setError('بيانات الدخول غير صحيحة');
      }
    } catch (err) {
      setError('حدث خطأ أثناء الاتصال');
    }
  };

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <AuthForm 
          type="login" 
          onSubmit={handleLogin} 
          error={error} 
        />
      </div>
    </Layout>
  );
}