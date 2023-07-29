import { Products } from "./components/products"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/header"
import { useFilters } from "./hooks/useFilters.js"
import { CartProvider } from "./context/cart"
import { Cart } from "./components/Cart"

function App() {
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
        <CartProvider>
        <Header />
        <Cart/>
        <Products products={filteredProducts} />
        </CartProvider>
    </>
    
  )
}

export default App
