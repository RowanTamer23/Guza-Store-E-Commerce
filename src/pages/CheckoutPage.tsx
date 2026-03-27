import React from "react";

const CheckoutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-8 tracking-tight">Checkout</h1>

      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Shipping Address
        </h2>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-gray-50/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-gray-50/50"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                Address Line 1
              </label>
              <input
                type="text"
                placeholder="123 Street Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-gray-50/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                City
              </label>
              <input
                type="text"
                placeholder="New York"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-gray-50/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="10001"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-gray-50/50"
              />
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
