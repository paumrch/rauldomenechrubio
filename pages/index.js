import Head from 'next/head'
import Header from './nav'
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

  console.log('cart', cart);

  function addToCart({ id } = {}) {
    updateCart(prev => {
      let cartState = { ...prev };

      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        cartState.products[id] = {
          id,
          quantity: 1
        }

        return cartState;

      }
    })
  }



  return (
    <div className="flex flex-col bg-red-50 justify-center min-h-screen">
      <Head>
        <title>Books</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="preload"
          href="/fonts/Recoleta-Black.woff2"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Recoleta-Bold.woff2"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Recoleta-Medium.woff2"
          as="font"
          crossOrigin=""
        />

<link
          rel="preload"
          href="/fonts/Recoleta-Regular.woff2"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Recoleta-Light.woff2"
          as="font"
          crossOrigin=""
        />




      </Head>
      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center pb-16">
        <h1 className="text-6xl font-carena font-regular sm:font-serif">
          Hola a {' '}
          <a className="text-red-300" href="/">
            Cremona
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          La casa de los jóvenes {' '}
          <code className="p-3 font-carena font-regular sm:font-serif text-lg bg-red-100 rounded-md">
            escritores
          </code>.
        </p>

        {/* <p className="">

          <strong>Items:</strong> {quantity}
          <br />
          <strong>Total:</strong> ${subtotal}

          <br />
          <button className="" onClick={checkout}>Check Out</button>
        </p> */}


        {products.map(row => {
          const { id, title, image, category, price } = row;
          return (

            <div className="flex flex-wrap items-center justify-center pt-10">
              <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-red-200 rounded-lg max-w-xs shadow-lg">
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                  </div>
                  <picture>
                    <source srcSet="/images/harrypotter1.jpeg" type="image/jpeg" />
                    <source srcSet="/images/harrypotter1.jpeg" />
                    <img className="relative w-40" src={row[0].image} alt="shopping item" />
                  </picture>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">
                    {row[0].category}
                  </span>
                  <div className="flex justify-between">
                    <span className="block font-serif font-bold text-xl">
                      {row[0].title}
                    </span>
                    <button className="bg-white rounded-full text-red-200 text-xs font-bold px-2 py-2 leading-none flex items-center hover:text-red-400" onClick={() => addToCart({ id: row[0].id })}>
                      {row[0].price}€
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 mx-2 mb-6 sm:mb-0 relative overflow-hidden bg-red-400 rounded-lg max-w-xs shadow-lg">
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                  </div>
                  <img className="relative w-40" src={row[1].image} alt="shopping" />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">
                    {row[1].category}
                  </span>
                  <div className="flex justify-between">
                    <span className="block font-serif font-bold font-bold text-xl">
                      {row[1].title}
                    </span>
                    <button className="bg-white rounded-full text-red-200 text-xs font-bold px-2 py-2 leading-none flex items-center hover:text-red-400" onClick={() => addToCart(row[1].id)}>
                      {row[1].price}€
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 mx-2 -mb-6 relative overflow-hidden bg-red-300 rounded-lg max-w-xs shadow-lg">
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                  </div>
                  <img className="relative w-40" src={row[2].image} alt="shopping" />
                </div>

                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">
                    {row[2].category}
                  </span>
                  <div className="flex justify-between">
                    <span className="block font-serif font-bold font-bold text-xl">
                      {row[2].title}
                    </span>
                    <button className="bg-white rounded-full text-red-200 text-xs font-bold px-2 py-2 leading-none flex items-center hover:text-red-400" onClick={() => addToCart(row[2].id)}>
                      {row[2].price}€
                    </button>
                    {/* <button className="bg-white rounded-full text-red-200 text-xs font-bold px-2 py-2 leading-none flex items-center hover:text-red-400" onClick={() => addToCart(row[2].id)}>
                      {row[2].price}€
                    </button> */}
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
