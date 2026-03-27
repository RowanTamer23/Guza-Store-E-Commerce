import React from "react";
import { Product } from "../types/types";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
  onAddSuccess: (name: string) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddSuccess }) => {
  const { cart, addToCart, updateQuantity } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="flex flex-col h-[480px] w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-blue-900/20">
      <div className="h-44 bg-gray-100 dark:bg-slate-800 relative group">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors" />
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-gray-800 dark:text-slate-100 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg leading-tight h-[2.5rem] overflow-hidden line-clamp-2 mb-2 text-gray-900 dark:text-slate-100">
          {product.title}
        </h3>

        <p className="text-gray-500 dark:text-slate-400 text-sm h-[4.5rem] overflow-hidden line-clamp-3 mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
              Price
            </span>
            <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
              ${product.price}
            </span>
          </div>

          {cartItem ? (
            <div className="flex items-center bg-gray-50 dark:bg-slate-800 p-1 rounded-xl border border-gray-200 dark:border-slate-700 gap-1">
              <button
                onClick={() => updateQuantity(product.id, -1)}
                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors font-bold"
              >
                −
              </button>
              <span className="font-black min-w-[32px] text-center text-sm dark:text-white">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => updateQuantity(product.id, 1)}
                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors font-bold"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                addToCart(product);
                onAddSuccess(product.title);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 text-sm"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
