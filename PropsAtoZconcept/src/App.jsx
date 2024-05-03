
import './App.css'
import Product from './components/Product'

function App() {

  return (
    <>
      <h1>Amozon</h1>
      <Product
        name="Apple 12"
        description="top Brand Phone Market"
        price={190.00}
      />
      <Product
        name="Readmi note 7s"
        description="top Brand Phone Market"
        price={90.00}
      />
      <Product
        name="Apple 14"
        description="top Brand Phone Market"
        price={200.00}
      />
    </>
  )
}

export default App
