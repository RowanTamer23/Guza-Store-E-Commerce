import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/types";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white">
              Our Collection
            </h1>
            <p className="text-gray-500 dark:text-slate-400 font-medium mt-2">
              Browse through {filtered.length} premium products.
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex gap-6 overflow-x-auto pb-4 mb-8 border-b border-gray-100 dark:border-slate-800 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap pb-3 px-1 text-sm font-bold capitalize transition-all relative ${
                category === cat
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300"
              }`}
            >
              {cat}
              {category === cat && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin mb-4" />
            <p className="text-gray-500 dark:text-slate-400 font-bold animate-pulse">
              Loading amazing gear...
            </p>
          </div>
        ) : (
          <>
            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 5col:grid-cols-5 gap-8">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddSuccess={(name) => console.log(`${name} added!`)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-slate-800">
                <h3 className="text-xl font-bold dark:text-white">
                  No products found
                </h3>
                <p className="text-gray-500 dark:text-slate-400">
                  Try selecting a different category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
