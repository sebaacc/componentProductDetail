import './App.css'
import ProductDetails from './components/ProductDetails'

function App() {

  const product = {
    name:"Canchitas de fútbol don Quique",
    location:"San martin 444, Córdoba Capital",
    schedule:"08:00am a 20:00pm",
    services:"Baños, Asador, Wifi",
    contact:"35188899",
    price:"1500",
    image: "/images/canchaFutbol7.png"
  }
  return (

    <div>
      <img src="https://www.seekpng.com/png/detail/18-187048_left-arrow-png-free-download-flecha-hacia-arriba.png" alt="Left Arrow Png Free Download - Flecha Hacia Arriba Sin Fondo@seekpng.com"></img>
      <h1>Detalle del producto</h1>
      <ProductDetails name={product.name} location={product.location} schedule={product.schedule} services={product.services} contact={product.contact} price={product.price} image={product.image} />
    </div>

  )
}

export default App
