import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CheckoutPage from "./pages/CheckoutPage"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import { ProductsProvider } from "./context/products_context"
import { CartProvider } from "./context/cart_context"
import { FilterProvider } from "./context/filter_context"

function App() {
  return (
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Router>
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CheckoutPage />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  )
}

export default App
