import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const deneme = "'Enes'"
  return (
    <div>
      <Product name="PC" price={500} />
      <Product name={deneme} price={deneme} />
      <Container>
        <Product name={deneme} price={deneme} />
      </Container>

    </div>
  )


}

export default App
