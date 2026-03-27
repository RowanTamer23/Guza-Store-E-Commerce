import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/types";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleAddSuccess = (name: string) => {
    console.log(`${name} added to cart from Home!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-600 text-white py-20 px-4 text-center rounded-b-[50px] md:rounded-b-[80px] mb-12 shadow-xl shadow-blue-600/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            GUZA E-COMMERCE
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 font-medium">
            Modern Design. Seamless Shopping.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-lg active:scale-95"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      <main className="max-w-[1600px] mx-auto px-6 w-full">
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-8 tracking-tight border-l-8 border-blue-600 pl-4">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddSuccess={handleAddSuccess}
              />
            ))}
          </div>
        </section>

        <section className="text-center pb-20">
          <h2 className="text-3xl font-black mb-8 tracking-tight">On Sale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {products.slice(5, 9).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddSuccess={handleAddSuccess}
              />
            ))}
          </div>

          <Link
            to="/products"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all"
          >
            Show More Products
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
