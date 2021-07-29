import Head from 'next/head'

import { useCart } from '../../hooks/use-cart.js';

import products from '../../products.json';


export default function Product() {

  const id = 'productId';
  const title = 'productTitle';



  // const { id, title, image, price, category } = product;

  // const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title } - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="">
          <img src={image} alt={title} />
        </div>

        <div>
          <h1>
            { title }
          </h1>

          {/* <p className="">
            { description }
          </p>

          <p className="">
            ${ price.toFixed(2) }
          </p> */}

          <p>
            <button className="" onClick={() => addToCart({ id })}>
              Buy
            </button>
          </p>
        </div>
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

// export async function getStaticProps({ params }) {
//   console.log('params', params)
//   const product = products.find(({ id }) => `${id}` === `${params.productId}`);
//   return {
//     props: {
//       product
//     },
//   };
// }

// export async function getStaticPaths() {
//   const paths = products.map((product) => {
//     const { id } = product;
//     return {
//       params: {
//         productId: id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false
//   };
// }