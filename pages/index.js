import Head from 'next/head'
import Header from './nav'
import Footer from './footer'
import products from '../products.json';
import { initiateCheckout } from '../lib/payments';
import Stripe from '@stripe/stripe-js';


export default function Home() {

  console.log('NEXT_PUBLIC_STRIPE_API_KEY', process.env.NEXT_PUBLIC_STRIPE_API_KEY)

  return (
    <div className="flex flex-col bg-red-50 justify-center min-h-screen">
      <Head>
        <title>Books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center pb-16">
        <h1 className="text-6xl font-main">
          Hola a {' '}
          <a className="text-red-300" href="https://nextjs.org">
            Cremona
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          La librería de los jóvenes {' '}
          <code className="p-3 font-main text-lg bg-red-100 rounded-md">
            escritores
          </code>.
        </p>
        {products.map(row => {
  // const { id, title, image, category, price } = row;
  return (

        <div className="flex flex-wrap items-center justify-center pt-10">
          <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-red-200 rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div key={row[0].id} className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
              </div>
              <picture>
                <source srcSet="/images/harrypotter1.jpeg" type="image/jpeg" />
                <source srcSet="/images/harrypotter1.jpeg" />
                <img className="relative w-40" src={row[0].image} alt="shopping item" />
              </picture>
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">
            { row[0].category }
              </span>
              <div className="flex justify-between">
                <span className="block font-main text-xl">
                { row[0].title }
                </span>
                <button className="bg-white rounded-full text-red-200 text-xs font-bold px-3 py-2 leading-none flex items-center hover:text-red-400" onClick={
                  () => {
                    initiateCheckout({
                      lineItems: [
                        {
                          price: id,
                          quantity: 1
                        }
                      ]
                    });
                  }
                }>
                  {row[0].price} €
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
                <span className="block font-main text-xl">
                {row[1].title}
                </span>
                <span className="bg-white rounded-full text-red-400 text-xs font-bold px-3 py-2 leading-none flex items-center">
                {row[1].price} €
                </span>
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
                <span className="block font-main text-xl">
                {row[2].title}
                </span>
                <span className="bg-white rounded-full text-red-300 text-xs font-bold px-3 py-2 leading-none flex items-center">
                {row[1].price} €
                </span>
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
