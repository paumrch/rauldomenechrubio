import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { CartContext, useCartState } from '../hooks/use-cart';
import { Nav } from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {


  const cart = useCartState();

  return (
    <CartContext.Provider value={cart}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp


