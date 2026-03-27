import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoutes";

import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
              <Header />

              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/cart" element={<CartPage />} />

                  <Route
                    path="/checkout"
                    element={
                        <CheckoutPage />
                    }
                  />

                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                  />

                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
