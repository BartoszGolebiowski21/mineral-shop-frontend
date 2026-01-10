import React from 'react'
import MiniCart from './MiniCart'
import CartIcon from '@/assets/svg-iconts/CartIcon'

const CartButton = () => {
  return (
    <>
      <div className="cart-button">
        <CartIcon />
        Koszyk
        <MiniCart />
      </div>
    </>
  )
}

export default CartButton