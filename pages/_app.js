import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { CartContext, useCartState } from '../hooks/use-cart';
import { Navbar } from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
  <CartContext.Provider value ={{cart}}>
     <Navbar />
  <Component {...pageProps} />
  </CartContext.Provider>
  );
}

export default MyApp
