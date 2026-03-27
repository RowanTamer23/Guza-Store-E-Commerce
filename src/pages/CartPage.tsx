import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-6 bg-gray-50 dark:bg-slate-900 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-slate-800">
            <div className="w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">🛒</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 dark:text-slate-400 mb-8 text-center max-w-xs">
              Looks like you haven't added anything to your bag yet.
            </p>
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-32 h-32 rounded-2xl object-cover bg-gray-50 dark:bg-slate-800"
                  />

                  <div className="flex-grow w-full">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg font-black text-gray-900 dark:text-white">
                        ${(item.price * item.quantity!).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-50 dark:bg-slate-800 p-1 rounded-xl border border-gray-100 dark:border-slate-700">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-slate-600 font-bold transition-colors"
                        >
                          −
                        </button>
                        <span className="px-4 font-black text-sm dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-slate-600 font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-black uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors"
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 p-8 bg-gray-50/50 dark:bg-slate-900/50 backdrop-blur-xl border border-gray-100 dark:border-slate-800 rounded-[2.5rem]">
                <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-gray-500 dark:text-slate-400 font-medium">
                    <span>Subtotal</span>
                    <span className="text-gray-900 dark:text-white font-bold">
                      ${Number(cartTotal).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-500 dark:text-slate-400 font-medium">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold uppercase text-xs tracking-widest mt-1">
                      Free
                    </span>
                  </div>

                  <div className="h-px bg-gray-200 dark:bg-slate-800 my-6" />

                  <div className="flex justify-between items-end mb-8">
                    <span className="text-gray-900 dark:text-white font-black text-xl">
                      Total
                    </span>
                    <div className="text-right">
                      <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
                        ${Number(cartTotal).toFixed(2)}
                      </p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                        VAT Included
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                  >
                    Proceed to Checkout
                  </Link>

                  <p className="text-center text-[11px] text-gray-400 dark:text-slate-500 font-medium mt-6 px-4">
                    By proceeding to checkout, you agree to our Terms of
                    Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
