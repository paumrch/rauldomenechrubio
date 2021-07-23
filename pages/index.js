import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import Footer from './footer'
import products from '../products.json';
import { initiateCheckout } from '../lib/payments';
import { useState } from 'react';
import Stripe from '@stripe/stripe-js';


const defaultCart = {
  products: {}
}


export default function Home() {

  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map(id => {
    const product = products.flat().find(e => e.id === id)
    
    console.log(product)

    return {
      ...cart.products[id],
      pricePerItem: product.price
    }
  })

  const subtotal = cartItems.reduce((accumulator, { pricePerUnit, quantity }) => {
    return accumulator + ( pricePerUnit * quantity );
  }, 0);

  console.log('subtotal', subtotal);

  function addToCart({ id } = {}) {
    updateCart(prev => {
      let cartState = { ...prev };

      if ( cart.products[id] ) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1
        }
      }

        return cartState;

    })
  }

  // function checkout() {
  //   initiateCheckout({
  //     lineItems: cartItems.map(({ id, quantity }) => {
  //       return {
  //         price: id,
  //         quantity
  //       }
  //     })
  //   })
  // }


  return (
    <div className="flex flex-col bg-red-50 justify-center min-h-screen">
      <Head>
        <title>Books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <Header /> */}

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center pb-16">
        <h1 className="text-6xl font-recoleta font-regular">
          Bienvenido, {' '}
          <a className="text-red-400" href="/">
            escritor
          </a>
          
        </h1>

        <p className="mt-3 text-2xl">
          Estás en tu {' '}
          <code className="p-3 font-recoleta font-regular text-lg bg-red-100 rounded-md">
            casa
          </code>.
        </p>

        <p className="">

          {/* <strong>Items:</strong> 
          {quantity}
          <br />
          <strong>Total:</strong> 
          ${subtotal} */}

          <br />
          {/* <button className="" onClick={checkout}>Check Out</button> */}
        </p>


        {products.map(product => {
          const { id, title, image, category, price } = product;
          return (

            <div className="flex flex-wrap items-center justify-center pt-10">
              
              <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-red-200 rounded-lg max-w-xs shadow-lg">
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                  </div>
                  <picture>
                    <source srcSet="/images/harrypotter1.jpeg" type="image/jpeg" />
                    <source srcSet="/images/harrypotter1.jpeg" />
                    <img className="relative w-40" src={product[0].image} alt="shopping item" />
                  </picture>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">
                    {product[0].category}
                  </span>
                  <div className="flex justify-between">
                    <span className="block font-recoleta font-regular text-xl">
                      {product[0].title}
                    </span>
                    <button className="bg-white rounded-full text-red-300 text-xs font-bold px-2 py-2 leading-none flex items-center hover:text-red-400" onClick={() => addToCart({id: product[0].id})}>
                    {product[0].price}
                    </button>
                  </div>
                </div>
              </div>
              
              
              <div className="flex-shrink-0 mx-2 mb-6 sm:mb-0 relative overflow-hidden bg-red-400 rounded-lg max-w-xs shadow-lg">
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                  </div>
                  <img className="relative w-40" src={product[1].image} alt="shopping" />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">
                    {product[1].category}
                  </span>
                  <div className="flex justify-between">
                    <span className="block font-recoleta font-regular text-xl">
                      {product[1].title}
                    </span>
                    <button className="bg-white rounded-full text-red-300 text-xs font-bold px-2 py-2 leading-none flex items-center hover:text-red-400" onClick={() => addToCart({ id: product[1].id })}>
                      {product[1].price}€
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 mx-2 -mb-6 relative overflow-hidden bg-red-300 rounded-lg max-w-xs shadow-lg">
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                  </div>
                  <img className="relative w-40" src={product[2].image} alt="shopping" />
                </div>

                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">
                    {product[2].category}
                  </span>
                  <div className="flex justify-between">
                    <span className="block font-recoleta font-regular text-xl">
                      {product[2].title}
                    </span>
                    <button className="bg-white rounded-full text-red-300 text-xs font-bold px-2 py-2 leading-none flex items-center hover:text-red-400" onClick={() => addToCart({ id: product[2].id })}>
                      {product[2].price}€
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

          )
        })}
      </main>

      <Footer />

    </div>
  )
}
