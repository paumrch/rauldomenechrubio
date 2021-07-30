import Head from 'next/head'

import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '../hooks/use-cart.js';

import products from '../products.json';

import Table from '../components/Table';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per Item'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  }
];

export default function Home() {



  const { cartItems, checkout } = useCart();

  const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};
    return {
      id,
      title,
      quantity,
      pricePerUnit: pricePerUnit.toFixed(2),
      total: (quantity * pricePerUnit).toFixed(2)
    }
  });

  return (
    <div className="">
      <Head>
        <title>Shopping Cart - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <h1 className="">
          <FaShoppingCart /> Cart
        </h1>

        <Table className="" data={data} columns={columns} />

        <p className="">

          <button className="" onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="" />
        </a>
      </footer>
    </div>
  )
}
