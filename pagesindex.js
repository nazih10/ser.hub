import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';

const products = [
  {
    id: 1,
    name: 'سجادة صلاة فاخرة',
    price: 250,
    image: '/images/product1.jpg',
    description: 'سجادة صلاة مميزة من أجود الخامات'
  },
  {
    id: 2,
    name: 'طقم مخدات تراثي',
    price: 180,
    image: '/images/product2.jpg',
    description: 'طقم 3 مخدات بتصميم تراثي أنيق'
  }
];

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-primary mb-8">
            مرحباً بكم في متجر أبو سريع
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}