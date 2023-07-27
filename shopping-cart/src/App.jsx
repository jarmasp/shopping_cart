import { Products } from "./components/products"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/header"
import { useFilters } from "./hooks/useFilters.js"

function App() {
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
    </>
    
  )
}

export default App
