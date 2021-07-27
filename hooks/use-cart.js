import { useState, createContext, useContext } from 'react';

import products from '../products.json';

import { initiateCheckout } from '../lib/payments';

const defaultCart = {
    products: {}
  }
  
export const CartContext = createContext();

export function useCartState() {

    const [cart, updateCart] = useState(defaultCart);

    const cartItems = Object.keys(cart.products).map(id => {
        const product = products.flat().find(e => e.id === id)
        
        console.log(product)
    
        return {
          ...cart.products[id],
          pricePerUnit: product.price
        }
      })
    
      const subtotal = cartItems.reduce((accumulator, { pricePerUnit, quantity }) => {
        return accumulator + ( pricePerUnit * quantity );
      }, 0);
    
      const quantity = cartItems.reduce((accumulator, { quantity }) => {
        return accumulator + quantity;
      }, 0);
    
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
    
      function checkout() {
        initiateCheckout({
          lineItems: cartItems.map(({ id, quantity }) => {
            return {
              price: id,
              quantity
            }
          })
        })
      }


    return {
        cart,
        updateCart,
        subtotal,
        quantity,
        addToCart,
        checkout
    };
}

export function useCart(){
    const cart = useContext(CartContext);
    return cart;
}